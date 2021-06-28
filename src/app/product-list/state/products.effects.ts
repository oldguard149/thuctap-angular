import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { ProductsResponse } from 'src/app/models/response.model';
import { ProductService } from 'src/app/product/services/product.service';
import * as ProductsActions from './products.actions';
import { selectPaginationInfo, selectQueryParams } from './products.selectors';

@Injectable()
export class ProductsEffects {
  updatePagination = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initializeQueryParams),
      map((action) => {
        const page = this.getQueryParamValue('page', 1);
        const limit = this.getQueryParamValue('limit', 10);
        const sortType = this.getQueryParamValue('sort', 'manual');
        return ProductsActions.updateQueryParams({ page, limit, sortType });
      })
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadProducts),
      concatLatestFrom((action) => this.store.select(selectPaginationInfo)),
      exhaustMap(([action, paginationInfo]) =>
        this.productService
          .getProducts(paginationInfo.page, paginationInfo.limit)
          .pipe(
            map((res: ProductsResponse) =>
              ProductsActions.loadProductsSuccess({ res: res })
            )
          )
      )
    )
  );

  updateLimitQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductsActions.changePageLimit),
        tap((action) => {
          this.updateQueryParam({ limit: action.limit });
        })
      ),
    { dispatch: false }
  );

  updatePageQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductsActions.changePage),
        tap((action) => {
          this.updateQueryParam({ page: action.page });
        })
      ),
    { dispatch: false }
  );

  updateSortTypeQueryParams$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductsActions.changeSortType),
        tap((action) => {
          this.updateQueryParam({ sort: action.sortType });
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private getQueryParamValue(key: string, defaulValue: any) {
    const value = this.route.snapshot.queryParamMap.get(key);
    return !!value ? value : defaulValue;
  }

  private updateQueryParam(value: object) {
    this.router.navigate([], {
      queryParams: {
        ...value,
      },
      queryParamsHandling: 'merge',
    });
  }
}
