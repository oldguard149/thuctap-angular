import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { productDetailAddToCart } from 'src/app/cart/state/cart.actions';
import { CartItem } from 'src/app/models/cartItem.model';
import { Product } from 'src/app/models/product.model';
import {
  loadProductDetails,
} from '../../state/product-details.actions';
import {
  selectProductDetails,
  selectProductDetailsBreadcrumb,
  selectProductQuantity,
} from '../../state/product-details.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  cartForm: FormGroup = this.fb.group({
    quantity: ['1', Validators.required],
  });
 
  product$ = this.store.select(selectProductDetails);
  productQuantity$ = this.store.select(selectProductQuantity);
  breadcrumb$ = this.store.select(selectProductDetailsBreadcrumb);
  private product: Product;

  addToCart() {
    const orderQuantity = parseInt(this.quantity.value);
    const item = {
      id: this.product._id,
      title: this.product.title,
      quantity: this.product.quantity,
      orderQuantity: orderQuantity,
      images: this.product.images,
      price: this.product.price
    } as CartItem;
    this.store.dispatch(productDetailAddToCart({ item: item }));
  }

  changeQuantity(action: 'minus' | 'plus', quantity: number) {
    const currentQuantity = parseInt(this.quantity.value);
    if (action === 'minus') {
      currentQuantity === 1
        ? alert('Minimun quantity: 1')
        : this.quantity.setValue(currentQuantity - 1);
    } else {
      currentQuantity < quantity
        ? this.quantity.setValue(currentQuantity + 1)
        : alert(`Only ${quantity} items available`);
    }
  }

  get quantity() {
    return this.cartForm.get('quantity');
  }

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
  ) {}
  destroyed = new Subject<void>();

  ngOnInit(): void {
    const currentProductId = this.route.snapshot.params['id'];
    this.store.dispatch(
      loadProductDetails({ productId: currentProductId })
    );
    this.product$.pipe(takeUntil(this.destroyed)).subscribe(product => this.product = product);
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
  recommendProductsBreakpoint = {
    485: { slidesPerView: 2 },
    650: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };
}
