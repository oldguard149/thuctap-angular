import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxStripeModule } from 'ngx-stripe';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { cartReducer } from './cart/state/cart.reducer';
import { CartEffects } from './cart/state/cart.effects';
import { authReducer } from './auth/state/auth.reducer';
import { AuthEffects } from './auth/state/auth.effects';
import { wishlistReducer } from './wishlist/state/wishlist.reducer';
import { WishlistEffects } from './wishlist/state/wishlist.effects';
import { TokenInterceptor } from './interceptors/token.interceptor';


registerLocaleData(en);
const ngZorroConfig: NzConfig = {
  message: { nzTop: 30, nzMaxStack: 5 },
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutsModule,
    StoreModule.forRoot(
      { cart: cartReducer, auth: authReducer, wishlist: wishlistReducer },
      {}
    ),
    EffectsModule.forRoot([CartEffects, AuthEffects, WishlistEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgxStripeModule.forRoot('pk_test_BHUOafmeJtUMRjSTplsjt9Z9'),
    NzMessageModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: 'API_URL', useValue: 'http://45.118.134.105:3000' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
