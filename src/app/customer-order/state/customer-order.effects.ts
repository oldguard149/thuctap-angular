import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs/operators';
import { CustomerOrderService } from '../services/customer-order.service';
import * as CustomerOrderActions from './customer-order.actions';

@Injectable()
export class CustomerOrderEffects {
  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerOrderActions.loadOrders),
      exhaustMap((action) =>
        this.orderService
          .getAll()
          .pipe(map((res) => CustomerOrderActions.loadOrdersSuccess({ res })))
      )
    )
  );

  loadOrderDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomerOrderActions.loadOrderDetails),
      exhaustMap((action) =>
        this.orderService
          .getDetails(action.orderId)
          .pipe(
            map((res) => CustomerOrderActions.loadOrderDetailsSuccess({ res }))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private orderService: CustomerOrderService
  ) {}
}
