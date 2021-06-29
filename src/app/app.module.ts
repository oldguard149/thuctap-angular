import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutsModule } from './layouts/layouts.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { cartReducer } from './cart/state/cart.reducer';
import { CartEffects } from './cart/state/cart.effects';
import { authReducer } from './auth/state/auth.reducer';
import { AuthEffects } from './auth/state/auth.effects';
registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LayoutsModule,
    StoreModule.forRoot({ cart: cartReducer, auth: authReducer }, {}),
    EffectsModule.forRoot([CartEffects, AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    { provide: NZ_I18N, useValue: vi_VN },
    { provide: 'API_URL', useValue: 'http://45.118.134.105:3000' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
