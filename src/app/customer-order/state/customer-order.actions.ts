import { createAction } from "@ngrx/store";

export const loadOrders = createAction(
    '[Customer Oder] Load Orders'
);

export const loadOrdersSuccess = createAction(
    '[Customer Oder] Load Orders Success'
);