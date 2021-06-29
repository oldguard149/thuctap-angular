import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ProductModule,
    NzToolTipModule
  ]
})
export class CartModule { }
