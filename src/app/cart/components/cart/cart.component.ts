import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CartSlectors from "../../state/cart.selectors";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(CartSlectors.selectCartItems);


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }

}
