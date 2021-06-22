import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductModule } from '../product/product.module';
import { SharedModule } from '../shared/shared.module';
import { FilterGroupComponent } from './filter-group/filter-group.component';


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
  ]
})
export class ProductListModule { }
