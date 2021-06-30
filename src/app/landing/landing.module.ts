import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SwiperModule } from 'swiper/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SharedModule } from '../shared/shared.module';
import { LandingRoutingModule } from './landing-routing.module';

import { DescriptionComponent } from './components/description/description.component';
import { DescriptionCardComponent } from './components/description/description-card/description-card.component';
import { LandingIndexComponent } from './components/landing-index/landing-index.component';
import { HorizontalNavButtonComponent } from './components/horizontal-nav-button/horizontal-nav-button.component';
import { BoxCountdownComponent } from './components/today-deals-section/box-countdown/box-countdown.component';
import { TodayDealsSectionComponent } from './components/today-deals-section/today-deals-section.component';
import { TodaydealsProductCardComponent } from './components/today-deals-section/todaydeals-product-card/todaydeals-product-card.component';
import { LatestBlogsSectionComponent } from './components/latest-blogs-section/latest-blogs-section.component';
import { LatestBlogsCardComponent } from './components/latest-blogs-section/latest-blogs-card/latest-blogs-card.component';
import { FeatureProductsSectionComponent } from './components/feature-products-section/feature-products-section.component';
import { BestSellerSectionComponent } from './components/best-seller-section/best-seller-section.component';
import { BestSellerCardComponent } from './components/best-seller-section/best-seller-card/best-seller-card.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { FeatureProductCardComponent } from './components/feature-products-section/feature-product-card/feature-product-card.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { ProductModule } from '../product/product.module';
import { landingPageFeatureKey } from './state/landing.selectors';
import { landingPageReducer } from './state/landing.reducer';
import { LandingPageEffects } from './state/landing.effects';
import { TodaydealsLargeProductCardComponent } from './components/today-deals-section/todaydeals-large-product-card/todaydeals-large-product-card.component';

@NgModule({
  declarations: [
    DescriptionComponent,
    DescriptionCardComponent,
    LandingIndexComponent,
    HorizontalNavButtonComponent,
    BoxCountdownComponent,
    TodayDealsSectionComponent,
    TodaydealsProductCardComponent,
    LatestBlogsSectionComponent,
    LatestBlogsCardComponent,
    FeatureProductsSectionComponent,
    BestSellerSectionComponent,
    BestSellerCardComponent,
    SectionTitleComponent,
    FeatureProductCardComponent,
    TodaydealsLargeProductCardComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    SwiperModule,
    NzDropDownModule,
    LayoutsModule,
    ProductModule,
    StoreModule.forFeature(landingPageFeatureKey, landingPageReducer),
    EffectsModule.forFeature([LandingPageEffects]),
    NzToolTipModule
  ],
})
export class LandingModule {}
