import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';
import { addToWishlist } from 'src/app/wishlist/state/wishlist.actions';

@Component({
  selector: 'app-feature-product-card',
  templateUrl: './feature-product-card.component.html',
  styleUrls: ['./feature-product-card.component.scss'],
})
export class FeatureProductCardComponent {
  @Input() product: Product;
  constructor(private store: Store) {}

  handleAddToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item }));
  }

  handleAddToWishlist() {
    this.store.dispatch(addToWishlist({product: this.product}));
  }
}
