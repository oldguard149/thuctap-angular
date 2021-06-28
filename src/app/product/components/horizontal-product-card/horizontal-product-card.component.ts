import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { Product } from 'src/app/models/product.model';

import { ExampleProduct } from '../mock-data';
import { getCartInfoFromProduct } from '../vertical-product-card/vertical-product-card.component';

@Component({
  selector: 'app-horizontal-product-card',
  templateUrl: './horizontal-product-card.component.html',
  styleUrls: ['./horizontal-product-card.component.scss'],
})
export class HorizontalProductCardComponent {
  @Input() product: Product = ExampleProduct;
  constructor(private store: Store) {}

  addToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item }));
  }
}
