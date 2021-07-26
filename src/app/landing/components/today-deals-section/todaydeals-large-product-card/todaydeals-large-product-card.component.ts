import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';
import { addToWishlist } from 'src/app/wishlist/state/wishlist.actions';

@Component({
  selector: 'app-todaydeals-large-product-card',
  templateUrl: './todaydeals-large-product-card.component.html',
  styleUrls: ['./todaydeals-large-product-card.component.scss']
})
export class TodaydealsLargeProductCardComponent {
  @Input() product: Product;
  constructor(private store: Store) { }

  handleAddToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({item}));
  }

  handleAddToWishlist() {
    this.store.dispatch(addToWishlist({product: this.product}));
  }

  dDay = new Date('Jan 5, 2022 19:37:25');
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
}
