import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map } from 'rxjs/operators';
import { OrderAdminService } from '../services/order-admin.service';
import * as AdminActions from './admin.actions';
import { selectPaginationInfo, selectSelectedOrder } from './admin.selectors';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadOrders),
      concatLatestFrom((action) => this.store.select(selectPaginationInfo)),
      exhaustMap(([action, pagination]) =>
        this.orderService
          .getAll(pagination.page, pagination.limit)
          .pipe(map((res) => {
            console.log(res);
            return AdminActions.loadOrdersSuccess({ res })
          }))
      )
    )
  );

  checkOrderStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.checkStatusOrder),
      concatLatestFrom((action) => this.store.select(selectSelectedOrder)),
      exhaustMap(([action, order]) =>
        this.orderService
          .checkStatus(order._id, action.body)
          .pipe(
            map((res) =>
              AdminActions.setAdminMessages({
                messages: [
                  {
                    type: 'success',
                    content: 'Update order status successfully',
                  },
                ],
              })
            )
          )
      )
    )
  );

  constructor(
    private store: Store,
    private actions$: Actions,
    private router: Router,
    private orderService: OrderAdminService
  ) {}
}
