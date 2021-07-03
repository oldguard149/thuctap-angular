import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CanActivateWishlistGuard } from './guards/can-activate-wishlist.guard';

const routes: Routes = [
  {
    path: '',
    component: WishlistComponent,
    canActivate: [CanActivateWishlistGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishlistRoutingModule {}
