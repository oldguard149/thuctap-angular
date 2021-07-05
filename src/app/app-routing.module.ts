import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./product-details/product-details.module').then(
        (m) => m.ProductDetailsModule
      ),
  },
  {
    path: '',
    loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'wishlist',
    loadChildren: () =>
      import('./wishlist/wishlist.module').then((m) => m.WishlistModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./customer-order/customer-order.module').then(
        (m) => m.CustomerOrderModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
