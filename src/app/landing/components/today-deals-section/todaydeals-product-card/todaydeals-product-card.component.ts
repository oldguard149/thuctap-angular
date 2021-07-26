import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';
import { addToWishlist, deleteFromWishlist } from 'src/app/wishlist/state/wishlist.actions';
import { selectWishlistIdSet } from 'src/app/wishlist/state/wishlist.selectors';

@Component({
  selector: 'app-todaydeals-product-card',
  templateUrl: './todaydeals-product-card.component.html',
  styleUrls: ['./todaydeals-product-card.component.scss'],
})
export class TodaydealsProductCardComponent {
  @Input() product: Product;
  wishlistIdSet$ = this.store.select(selectWishlistIdSet);
  constructor(private store: Store) {}
  dDay = new Date('Jan 5, 2022 15:37:25');
  hours = this.dDay.getHours();
  minutes = this.dDay.getMinutes();
  seconds = this.dDay.getSeconds();

  private destroyed = new Subject<void>();
  ngOnInit() {
    interval(1000)
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => this.getTimeDifference());
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  private getTimeDifference() {
    const twohours = this.dDay.getTime();
    const timeDifference = twohours - new Date().getTime();
    this.allocateTimeUnits(timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    this.seconds = Math.floor((timeDifference / 1000) % 60);
    this.minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    this.hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  }

  handleAddToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item }));
  }

  handleWishlistAction(action: 'add' | 'remove') {
    if (action === 'add') {
      this.store.dispatch(addToWishlist({ product: this.product }));
    } else {
      this.store.dispatch(deleteFromWishlist({ productId: this.product.id }));
    }
  }
}
