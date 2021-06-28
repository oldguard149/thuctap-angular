import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { ExampleProduct } from '../mock-data';

export function getCartInfoFromProduct(product: Product) {
  return {
    id: product.id,
    title: product.title,
    images: product.images,
    quantity: product.quantity,
    orderQuantity: 1,
    price: product.price,
  } as CartItem;
}

@Component({
  selector: 'app-vertical-product-card',
  templateUrl: './vertical-product-card.component.html',
  styleUrls: ['./vertical-product-card.component.scss'],
})
export class VerticalProductCardComponent implements OnInit {
  @Input() product: Product = ExampleProduct;
  constructor(private store: Store) {}

  ngOnInit(): void {}

  handleAddToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item: item }));
  }
}
