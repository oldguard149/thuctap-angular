import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { removeCartItem, updateOrderQuantity } from '../../state/cart.actions';
import {
  selectCartItems,
  selectTotalCartItems,
  selectTotalPrice,
} from '../../state/cart.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart$ = this.store.select(selectCartItems);
  total$ = this.store.select(selectTotalCartItems);
  totalPrice$ = this.store.select(selectTotalPrice);
  vm$ = combineLatest([this.cart$, this.total$, this.totalPrice$]).pipe(
    map(([cart, total, totalPrice]) => ({ cart, total, totalPrice }))
  );

  form = this.fb.group({
    cart: this.fb.array([]),
  });

  private cartSupscription: Subscription;

  handleUpdateOrderQuantity(id: string, index: number) {
    const orderQty = this.cartFormArray.controls[index].value;
    this.store.dispatch(updateOrderQuantity({ id, orderQty }));
  }

  handleRemoveItem(id: string, index: number) {
    this.store.dispatch(removeCartItem({ id }));
    this.cartFormArray.removeAt(index);
  }

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }

  get cartFormArray() {
    return this.form.get('cart') as FormArray;
  }

  breadcrumbData = [
    { label: 'Home', link: '/' },
    { label: 'Your Shopping Cart', link: `/cart` },
  ];

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.cartSupscription = this.cart$.subscribe((items) => {
      items.forEach((item) => {
        this.cartFormArray.push(new FormControl(item.orderQuantity));
      });
    });
  }

  ngOnDestroy() {
    this.cartSupscription.unsubscribe();
  }
}
