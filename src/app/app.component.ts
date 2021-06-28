import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCartFromLocalStorage } from './cart/state/cart.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thuctap-angular';
  ngOnInit() {
    this.store.dispatch(loadCartFromLocalStorage())
  }

  constructor(private store: Store) {}
}
