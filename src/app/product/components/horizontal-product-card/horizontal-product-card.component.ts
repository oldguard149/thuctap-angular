import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { productCardAddToCart } from 'src/app/cart/state/cart.actions';
import { getCartInfoFromProduct } from 'src/app/cart/state/cart.reducer';
import { Product } from 'src/app/models/product.model';
import { addToWishlist } from 'src/app/wishlist/state/wishlist.actions';


@Component({
  selector: 'app-horizontal-product-card',
  templateUrl: './horizontal-product-card.component.html',
  styleUrls: ['./horizontal-product-card.component.scss'],
})
export class HorizontalProductCardComponent {
  @Input() product: Product// = ExampleProduct;
  constructor(private store: Store) {}

  addToCart() {
    const item = getCartInfoFromProduct(this.product);
    this.store.dispatch(productCardAddToCart({ item }));
  }

  handleAddToWishlist() {
    this.store.dispatch(addToWishlist({product: this.product}));
  }
}
