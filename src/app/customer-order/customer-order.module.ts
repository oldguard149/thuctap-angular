import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrderRoutingModule } from './customer-order-routing.module';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { StoreModule } from '@ngrx/store';
import { CustomerOrderFeatureKey } from './state/customer-order.selectors';
import { customerOrderReducer } from './state/customer-order.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomerOrderEffects } from './state/customer-order.effects';
import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomerOrderRoutingModule,
    SharedModule,
    ProductModule,
    StoreModule.forFeature(CustomerOrderFeatureKey, customerOrderReducer),
    EffectsModule.forFeature([CustomerOrderEffects])
  ]
})
export class CustomerOrderModule { }
