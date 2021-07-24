import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
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
  vm$ = combineLatest([
    this.cart$,
    this.store.select(selectTotalCartItems),
    this.store.select(selectTotalPrice),
  ]).pipe(map(([cart, total, totalPrice]) => ({ cart, total, totalPrice })));

  form = this.fb.group({
    cart: this.fb.array([]),
  });

  handleUpdateOrderQuantity(id: string, index: number) {
    const orderQty = parseInt(this.cartFormArray.controls[index].value);
    if (orderQty <= 0) {
      this.message.createMessage('Order quantity must greater than 0', 'error');
    } else {
      this.store.dispatch(updateOrderQuantity({ id, orderQty }));
    }
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

  breadcrumbData: BreadCrumb[] = [
    { label: 'Home', link: '/' },
    { label: 'Your Shopping Cart', link: `/cart` },
  ];

  constructor(
    private store: Store,
    private fb: FormBuilder,
    private router: Router,
    private message: PopupMessageService
  ) {}
  private destroyed = new Subject<void>();

  ngOnInit(): void {
    this.cart$.pipe(takeUntil(this.destroyed)).subscribe((items) => {
      items.forEach((item) => {
        this.cartFormArray.push(new FormControl(item.orderQuantity));
      });
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
