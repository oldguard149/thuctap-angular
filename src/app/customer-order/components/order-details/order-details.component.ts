import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectCheckOutMessages } from 'src/app/cart/state/cart.selectors';
import { loadOrderDetails, resetSelectedOrder } from '../../state/customer-order.actions';
import {
  selectCustomerOrderDetails,
  selectCustomerOrderDetailsBreadcrumbData,
  selectCustomerOrderLoading,
} from '../../state/customer-order.selectors';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectCustomerOrderDetails),
    this.store.select(selectCustomerOrderDetailsBreadcrumbData),
    this.store.select(selectCustomerOrderLoading),
    this.store.select(selectCheckOutMessages),
  ]).pipe(
    map(([orderDetails, breadcrumbData, loading, messages]) => ({
      orderDetails,
      breadcrumbData,
      loading,
      messages
    }))
  );
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(loadOrderDetails({ orderId }));
  }

  ngOnDestroy() {
    this.store.dispatch(resetSelectedOrder());
  }
}
