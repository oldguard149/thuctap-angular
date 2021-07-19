import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { checkStatusOrder, resetAdminMessages } from '../../state/admin.actions';
import {
  selectAdminMessages,
  selectCheckStatusOrderForSelectData,
  selectSelectedOrder,
} from '../../state/admin.selectors';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss'],
})
export class OrdersDetailsComponent implements OnInit {
  order$ = this.store.select(selectSelectedOrder);
  vm$ = combineLatest([
    this.order$,
    this.store.select(selectCheckStatusOrderForSelectData),
    this.store.select(selectAdminMessages)
  ]).pipe(
    map(([order, checkStatusOrderData, messages]) => ({ order, checkStatusOrderData, messages }))
  );
  form: FormGroup = this.fb.group({
    status: [''],
  });
  constructor(
    private store: Store,
    private fb: FormBuilder
  ) {}
  private destroyed = new Subject<void>();
  ngOnInit(): void {
    this.order$.pipe(takeUntil(this.destroyed)).subscribe((order) => {
      this.form.get('status').setValue(order?.status);
    });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
    this.store.dispatch(resetAdminMessages());
  }

  submitForm() {
    this.store.dispatch(checkStatusOrder({ body: this.form.value }));
    window.scroll(0, 0);
  }

  handleStatusChange(value) {
    this.form.get('status').setValue(value);
  }
}
