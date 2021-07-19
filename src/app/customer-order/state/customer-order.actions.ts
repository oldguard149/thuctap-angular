import { createAction, props } from "@ngrx/store";
import { Order } from "src/app/models/order.model";

export const loadOrders = createAction(
    '[Customer Order / Backend API] Load Orders'
);

export const loadOrdersSuccess = createAction(
    '[Customer Order] Load Orders Success',
    props<{res: Order[]}>()
);

export const loadOrderDetails = createAction(
    '[Customer Order Detail] Load Order Details',
    props<{orderId: string}>()
)

export const loadOrderDetailsSuccess = createAction(
    '[Customer Order Detail] Load Order Details Success',
    props<{res: Order}>()
)

export const resetSelectedOrder = createAction(
    '[Customer Order Detail] Reset Selected Order'
)