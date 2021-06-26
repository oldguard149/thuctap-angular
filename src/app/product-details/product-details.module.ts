import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ImagesSectionComponent } from './components/images-section/images-section.component';
import { ProductModule } from '../product/product.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { DetailsTabsComponent } from './components/details-tabs/details-tabs.component';
import { SharedModule } from '../shared/shared.module';
import { productDetailsReducer } from './state/product-details.reducer';
import { ProductDetailsEffects } from './state/product-details.effects';
import { productDetailsFeatureKey } from './state/product-details.selectors';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ImagesSectionComponent,
    SocialIconsComponent,
    DetailsTabsComponent,
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    ProductModule,
    ReactiveFormsModule,
    SwiperModule,
    SharedModule,
    StoreModule.forFeature(productDetailsFeatureKey, productDetailsReducer),
    EffectsModule.forFeature([ProductDetailsEffects])
  ]
})
export class ProductDetailsModule { }
