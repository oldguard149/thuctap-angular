import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ProductModule } from '../product/product.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { wishlistFeatureKey } from './state/wishlist.selectors';
import { wishlistReducer } from './state/wishlist.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WishlistEffects } from './state/wishlist.effects';


@NgModule({
  declarations: [
    WishlistComponent
  ],
  imports: [
    CommonModule,
    WishlistRoutingModule,
    ProductModule,
    NgxPaginationModule,
    SharedModule,
    StoreModule.forFeature(wishlistFeatureKey, wishlistReducer),
    EffectsModule.forFeature([WishlistEffects])
  ]
})
export class WishlistModule { }
