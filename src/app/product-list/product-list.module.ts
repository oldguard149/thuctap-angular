import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
import { ProductListRoutingModule } from './product-list-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { productsFeatureKey } from './state/products.selectors';
import { productsReducer } from './state/products.reducer';
import { ProductsEffects } from './state/products.effects';

import { ProductListComponent } from './components/product-list/product-list.component';
import { FilterGroupComponent } from './components/filter-group/filter-group.component';



@NgModule({
  declarations: [
    ProductListComponent,
    FilterGroupComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ProductModule,
    SharedModule,
    NgxPaginationModule,
    StoreModule.forFeature(productsFeatureKey, productsReducer),
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductListModule { }
