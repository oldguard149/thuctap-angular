import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StripeCardElementOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { selectUserProfile } from 'src/app/auth/state/auth.selectors';
import { checkOut, clearCheckOutMessages } from '../../state/cart.actions';
import { selectTotalPrice, selectCartItems, selectCheckOutMessages } from '../../state/cart.selectors';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  cartItems$ = this.store.select(selectCartItems);
  totalPrice$ = this.store.select(selectTotalPrice);
  userProfile$ = this.store.select(selectUserProfile);
  checkOutMessages$ = this.store.select(selectCheckOutMessages);
  vm$ = combineLatest([this.cartItems$, this.totalPrice$, this.checkOutMessages$]).pipe(
    map(([cartItems, totalPrice, messages]) => ({ cartItems, totalPrice, messages }))
  );

  checkoutForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    postcode: [''],
    address: [''],
    card_tok: ['', Validators.required],
    description: [''],
    products: this.fb.array([]),
  });

  submit() {
    this.stripeService
      .createToken(this.card.element)
      .subscribe((result) => {
        if (result.token) {
          // Use the token, dispatch action to backend
          this.isStripErrorSubject.next(false);
          
          const tokenId = result.token.id;
          this.checkoutForm.get('card_tok').setValue(tokenId);

          this.store.dispatch(checkOut({body: this.checkoutForm.value}));
          
          console.log(this.checkoutForm.value);
        } else if (result.error) {
          // Error creating the token, show error
          const errorMessage = result.error.message;
          this.isStripErrorSubject.next(true);
          this.stripErrorSubject.next(errorMessage);
        }
      });
  }

  private collapseHeaderSubject = new BehaviorSubject('Show shopping cart');
  collapseHeader$ = this.collapseHeaderSubject.asObservable();
  changeCollapePanelHeader(value: boolean) {
    if (value) {
      this.collapseHeaderSubject.next('Hide shopping cart');
    } else {
      this.collapseHeaderSubject.next('Show shopping cart');
    }
  }

  private stripErrorSubject = new Subject();
  stripeError$ = this.stripErrorSubject.asObservable();
  private isStripErrorSubject = new BehaviorSubject(false);
  isStripeError$ = this.isStripErrorSubject.asObservable();
  private destroyed = new Subject<void>();

  constructor(private fb: FormBuilder, private store: Store, private stripeService: StripeService) {}
  ngOnInit(): void {
    this.userProfile$.pipe(takeUntil(this.destroyed)).subscribe(userProfile => {
      if (userProfile) {
        this.checkoutForm.patchValue({
          email: userProfile.email,
          name: `${userProfile.first_name} ${userProfile.last_name}`,
          phone: userProfile.phone,
          address: userProfile.address
        })
      }
    });

    this.cartItems$.pipe(takeUntil(this.destroyed)).subscribe(cartItems => {
      cartItems.map(item => {
        this.productsFormArray.push(this.fb.group({id: item.id, qty: item.orderQuantity}));
      })
    })
  }

  ngOnDestroy() {
    this.store.dispatch(clearCheckOutMessages());
    this.destroyed.next();
    this.destroyed.complete();
  }
  

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#bed2e9'
        }
      }
    }
  };

  private get productsFormArray() {
    return this.checkoutForm.get('products') as FormArray;
  }
}
