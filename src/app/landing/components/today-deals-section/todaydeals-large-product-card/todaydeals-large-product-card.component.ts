import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';

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
}