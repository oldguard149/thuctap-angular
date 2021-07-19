import { createReducer, on } from '@ngrx/store';
import { Order } from 'src/app/models/order.model';
import * as CustomerOrderActions from './customer-order.actions';

export interface CustomerOrderState {
  orders: Order[];
  selectedOrder: Order;
  loading: boolean;
}

const initialState: CustomerOrderState = {
  orders: null,
  selectedOrder: null,
  loading: true,
};

export const customerOrderReducer = createReducer(
  initialState,
  on(CustomerOrderActions.loadOrderDetails, (state) => ({
    ...state,
    loading: true,
  })),
  on(CustomerOrderActions.loadOrders, (state) => ({ ...state, loading: true })),
  on(CustomerOrderActions.loadOrdersSuccess, (state, { res }) => ({
    ...state,
    orders: res,
    loading: false,
  })),
  on(CustomerOrderActions.loadOrderDetailsSuccess, (state, { res }) => ({
    ...state,
    selectedOrder: res,
    loading: false,
  })),
  on(CustomerOrderActions.resetSelectedOrder, (state) => ({...state, selectedOrder: null}))
);
