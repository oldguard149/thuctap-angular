import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAuthTokenFromLocalStorage } from './auth/state/auth.actions';
import { loadCartFromLocalStorage } from './cart/state/cart.actions';
import { loadWishlist } from './wishlist/state/wishlist.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thuctap-angular';
  ngOnInit() {
    this.store.dispatch(loadCartFromLocalStorage());
    this.store.dispatch(loadAuthTokenFromLocalStorage());
    this.store.dispatch(loadWishlist());
  }

  constructor(private store: Store) {}
}
