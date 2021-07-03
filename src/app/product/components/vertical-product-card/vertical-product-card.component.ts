import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from 'src/app/models/product.model';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { ExampleProduct } from '../mock-data';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { addToWishlist } from 'src/app/wishlist/state/wishlist.actions';

@Component({
  selector: 'app-vertical-product-card',
  templateUrl: './vertical-product-card.component.html',
  styleUrls: ['./vertical-product-card.component.scss'],
})
export class VerticalProductCardComponent {
  @Input() product: Product = ExampleProduct;
  constructor(private store: Store) {}

  handleAddToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item: item }));
  }

  handleAddToWishlist() {
    this.store.dispatch(addToWishlist({product: this.product}));
  }
}
