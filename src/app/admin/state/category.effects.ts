import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaust, exhaustMap, map } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';
import { CategoryAdminService } from '../services/category-admin.service';

import * as AdminActions from './admin.actions';
import { selectSelectedCategory } from './admin.selectors';

@Injectable()
export class CategoryEffects {
  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadCategories),
      exhaustMap(() =>
        this.categoryService.getAll().pipe(
          map((res) => AdminActions.loadCategoriesSuccess({ res })),
          catchError((error) => {
            console.log(error);
            return of(AdminActions.adminErorr());
          })
        )
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
            return AdminActions.setAdminMessages({
              messages: [
                { type: 'success', content: 'Create category successfully' },
              ],
            });
          }),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setAdminMessages({
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
      concatLatestFrom(action => this.store.select(selectSelectedCategory)),
      exhaustMap(([action, selectedCategory]) =>
        this.categoryService.update(selectedCategory._id, action.body).pipe(
          map((res) => {
            return AdminActions.setAdminMessages({
              messages: [
                { type: 'success', content: 'Update category successfully' },
              ],
            });
          }),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setAdminMessages({
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
      concatLatestFrom(action => this.store.select(selectSelectedCategory)),
      exhaustMap(([action, selectedCategory]) =>
        this.categoryService.delete(selectedCategory._id).pipe(
          map((res) => {
            this.router.navigateByUrl('/admin/category-list');
            return AdminActions.setAdminMessages({
              messages: [
                { type: 'success', content: 'Delete category successfully' },
              ],
            });
          }),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setAdminMessages({
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
            AdminActions.setAdminMessages({
              messages: [
                { type: 'success', content: 'Actice category successfully' },
              ],
            })
          ),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setAdminMessages({
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
            AdminActions.setAdminMessages({
              messages: [
                { type: 'success', content: 'Deactice category successfully' },
              ],
            })
          ),
          catchError((messages: ResponseMessage[]) =>
            of(
              AdminActions.setAdminMessages({
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
