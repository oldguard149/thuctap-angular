import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';
import { ProductAdminService } from '../services/product-admin.service';
import { selectPaginationInfo } from './admin.selectors';

import * as AdminActions from './admin.actions';

@Injectable()
export class ProductEffects {
  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadProducts),
      concatLatestFrom((action) => this.store.select(selectPaginationInfo)),
      exhaustMap(([action, paginationInfo]) =>
        this.productService
          .getAll(paginationInfo.page, paginationInfo.limit)
          .pipe(map((res) => AdminActions.loadProductsSuccess({ res })))
      )
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.createProduct),
      exhaustMap((action) =>
        this.productService.create(action.body).pipe(
          map((res) => {
            this.router.navigateByUrl('/admin/product-list');
            return AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Create product successfully' },
              ],
            });
          }),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setMessages({
                messages,
              })
            )
          )
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.updateProduct),
      exhaustMap((action) =>
        this.productService.update(action.productId, action.body).pipe(
          map((res) =>
            AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Update product successfully' },
              ],
            })
          ),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setMessages({
                messages,
              })
            )
          )
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deleteProduct),
      exhaustMap((action) =>
        this.productService.delete(action.productId).pipe(
          map((res) => {
            return AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Delete product successfully' },
              ],
            });
          }),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setMessages({
                messages,
              })
            )
          )
        )
      )
    )
  );

  activeProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.activeProduct),
      exhaustMap((action) =>
        this.productService.active(action.productId).pipe(
          map((res) =>
            AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Actice product successfully' },
              ],
            })
          ),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setMessages({
                messages,
              })
            )
          )
        )
      )
    )
  );

  deactiveProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deactiveProduct),
      exhaustMap((action) =>
        this.productService.deactive(action.productId).pipe(
          map((res) =>
            AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Deactice product successfully' },
              ],
            })
          ),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setMessages({
                messages,
              })
            )
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private productService: ProductAdminService,
    private router: Router
  ) {}
}
