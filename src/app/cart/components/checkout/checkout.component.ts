import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectTotalPrice, selectCartItems } from '../../state/cart.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems$ = this.store.select(selectCartItems);
  totalPrice$ = this.store.select(selectTotalPrice);
  vm$ = combineLatest([this.cartItems$, this.totalPrice$]).pipe(
    map(([cartItems, totalPrice]) => ({ cartItems, totalPrice }))
  );

  checkoutForm: FormGroup = this.fb.group({
    name: [''],
    email: [''],
    phone: [''],
    postcode: [''],
    address: [''],
    card_tok: ['tok_visa'],
    description: [''],
    products: this.fb.array([]),
  });

  submit() {
    console.log(this.checkoutForm.value);
  }

  constructor(private fb: FormBuilder, private store: Store) {}
  private collapseHeaderSubject = new BehaviorSubject('Show shopping cart');
  collapseHeader$ = this.collapseHeaderSubject.asObservable();
  ngOnInit(): void {
  }

  changeCollapePanelHeader(value: boolean) {
    if (value) {
      this.collapseHeaderSubject.next('Hide shopping cart');
    } else {
      this.collapseHeaderSubject.next('Show shopping cart');
    }
  }
}
