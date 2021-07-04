import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaust, exhaustMap, map } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';
import { CategoryAdminService } from '../services/category-admin.service';

import * as AdminActions from './admin.actions';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadCategories),
      exhaustMap(() =>
        this.categoryService
          .getAll()
          .pipe(map((res) => AdminActions.loadCategoriesSuccess({ res })))
      )
    )
  );

  createCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.createCategory),
      exhaustMap((action) =>
        this.categoryService.create(action.body).pipe(
          map((res) => {
            this.router.navigateByUrl('/admin/category-list');
            return AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Create category successfully' },
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

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.updateCategory),
      exhaustMap((action) =>
        this.categoryService.update(action.categoryId, action.body).pipe(
          map((res) => {
            return AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Create category successfully' },
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

  deleteCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.deleteCategory),
      exhaustMap((action) =>
        this.categoryService.delete(action.categoryId).pipe(
          map((res) => {
            return AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Create category successfully' },
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

  activeCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.activeCategory),
      exhaustMap((action) =>
        this.categoryService.active(action.categoryId).pipe(
          map((res) =>
            AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Actice category successfully' },
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
      ofType(AdminActions.deactiveCategory),
      exhaustMap((action) =>
        this.categoryService.deactive(action.categoryId).pipe(
          map((res) =>
            AdminActions.setMessages({
              messages: [
                { type: 'success', content: 'Deactice category successfully' },
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
    private router: Router,
    private categoryService: CategoryAdminService
  ) {}
}
