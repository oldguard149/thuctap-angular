import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SharedModule } from '../shared/shared.module';
import { DescriptionComponent } from './components/description/description.component';
import { DescriptionCardComponent } from './components/description-card/description-card.component';
import { ProductCardActionComponent } from './components/product-card-action/product-card-action.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LandingIndexComponent } from './components/landing-index/landing-index.component';
import { HorizontalNavButtonComponent } from './components/horizontal-nav-button/horizontal-nav-button.component';
import { StarsComponent } from './components/stars/stars.component';


@NgModule({
  declarations: [
    DropdownComponent,
    SectionHeaderComponent,
    DescriptionComponent,
    DescriptionCardComponent,
    ProductCardActionComponent,
    ProductCardComponent,
    LandingIndexComponent,
    HorizontalNavButtonComponent,
    StarsComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
  ]
})
export class LandingModule { }
