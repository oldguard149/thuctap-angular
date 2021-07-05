import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadOrderDetails } from '../../state/customer-order.actions';
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
  ]).pipe(
    map(([orderDetails, breadcrumbData, loading]) => ({
      orderDetails,
      breadcrumbData,
      loading,
    }))
  );
  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
   const orderId = this.route.snapshot.paramMap.get('id');
   this.store.dispatch(loadOrderDetails({orderId}))
  }
}
