import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';
import { CustomerOrderState } from './customer-order.reducer';

export const CustomerOrderFeatureKey = 'customer-order';

const selectCustomerOrderState = createFeatureSelector<CustomerOrderState>(
  CustomerOrderFeatureKey
);

export const selectCustomerOrders = createSelector(
  selectCustomerOrderState,
  (state) => state.orders
);

export const selectCustomerOrderDetails = createSelector(
  selectCustomerOrderState,
  (state) => state.selectedOrder
);

export const selectCustomerOrderLoading = createSelector(
  selectCustomerOrderState,
  (state) => state.loading
);

export const selectCustomerOrdersBreadcrumbData = createSelector(
  selectCustomerOrderState,
  () =>
    [
      { label: 'Home', link: '/' },
      { label: 'Oders', link: '/orders' },
    ] as BreadCrumb[]
);

export const selectCustomerOrderDetailsBreadcrumbData = createSelector(
    selectCustomerOrderState,
    (state) =>
      [
        { label: 'Home', link: '/' },
        { label: 'Orders', link: '/orders'},
        { label: 'Oder Details', link: `/orders/${state.selectedOrder?._id}` },
      ] as BreadCrumb[]
  );
