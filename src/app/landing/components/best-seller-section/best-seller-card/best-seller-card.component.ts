import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';
import {
  addToWishlist,
  deleteFromWishlist,
} from 'src/app/wishlist/state/wishlist.actions';
import { selectWishlistIdSet } from 'src/app/wishlist/state/wishlist.selectors';

@Component({
  selector: 'app-best-seller-card',
  templateUrl: './best-seller-card.component.html',
  styleUrls: ['./best-seller-card.component.scss'],
})
export class BestSellerCardComponent {
  @Input() product: Product;
  wishlistIdSet$ = this.store.select(selectWishlistIdSet);
  constructor(private store: Store) {}

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
