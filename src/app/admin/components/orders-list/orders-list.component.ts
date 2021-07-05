import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  changePage,
  loadOrders,
  resetAdminMessages,
  resetPaginationInfo,
  setSelectedOrder,
} from '../../state/admin.actions';
import {
  selectAdminLoading,
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
    this.store.select(selectAdminLoading),
  ]).pipe(
    map(([orders, paginationInfo, loading]) => ({
      orders,
      paginationInfo,
      loading,
    }))
  );
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadOrders());
  }

  ngOnDestroy() {
    this.store.dispatch(resetAdminMessages());
    this.store.dispatch(resetPaginationInfo());
  }

  handleCheckStatus(index: number) {
    this.store.dispatch(setSelectedOrder({ index }));
    this.router.navigateByUrl('/admin/order-details');
  }

  handlePageChange(page: number) {
    this.store.dispatch(changePage({ page }));
    this.store.dispatch(loadOrders());
  }
}
