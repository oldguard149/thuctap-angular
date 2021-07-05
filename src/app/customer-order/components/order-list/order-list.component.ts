import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadOrderDetails, loadOrders } from '../../state/customer-order.actions';
import {
  selectCustomerOrderLoading,
  selectCustomerOrders,
  selectCustomerOrdersBreadcrumbData,
} from '../../state/customer-order.selectors';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectCustomerOrders),
    this.store.select(selectCustomerOrdersBreadcrumbData),
    this.store.select(selectCustomerOrderLoading),
  ]).pipe(
    map(([orders, breadcrumbData, loading]) => ({
      orders,
      breadcrumbData,
      loading,
    }))
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
  }

  loadOrderDetails(orderId: string) {
    this.store.dispatch(loadOrderDetails({orderId}))
  }
}
