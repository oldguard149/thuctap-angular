import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadOrders, resetAdminMessages, resetPaginationInfo, setSelectedOrder } from '../../state/admin.actions';
import {
  selectOrders,
  selectPaginationInfo,
} from '../../state/admin.selectors';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
})
export class OrdersListComponent implements OnInit {
  vm$ = combineLatest([
    this.store.select(selectOrders),
    this.store.select(selectPaginationInfo),
  ]).pipe(map(([orders, paginationInfo]) => ({ orders, paginationInfo })));
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
  }

  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
    this.store.dispatch(resetPaginationInfo());
  }

  handleCheckStatus(index: number) {
    this.store.dispatch(setSelectedOrder({index}));
    this.router.navigateByUrl('/admin/order-details');
  }
}
