import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { CardActionComponent } from './components/card-action/card-action.component';
import { ProductPriceComponent } from './components/product-price/product-price.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { HorizontalProductCardComponent } from './components/horizontal-product-card/horizontal-product-card.component';
import { VerticalProductCardComponent } from './components/vertical-product-card/vertical-product-card.component';


@NgModule({
  declarations: [
    CardActionComponent,
    ProductPriceComponent,
    StarRatingComponent,
    HorizontalProductCardComponent,
    VerticalProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
