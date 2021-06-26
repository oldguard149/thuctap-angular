import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  addToCart,
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
export class ProductDetailsComponent implements OnInit {
  private currentProductId: string = null;
  cartForm: FormGroup = this.fb.group({
    quantity: ['1', Validators.required],
  });
 
  product$ = this.store.select(selectProductDetails);
  productQuantity$ = this.store.select(selectProductQuantity);
  breadcrumb$ = this.store.select(selectProductDetailsBreadcrumb);

  ngOnInit(): void {
    const currentProductId = this.route.snapshot.params['id'];
    this.store.dispatch(
      loadProductDetails({ productId: currentProductId })
    );
  }

  addToCart() {
    const orderQuantity = this.cartForm.value;
    this.store.dispatch(
      addToCart({ ...orderQuantity, productId: this.currentProductId })
    );
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

  recommendProductsBreakpoint = {
    485: { slidesPerView: 2 },
    650: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  };
}
