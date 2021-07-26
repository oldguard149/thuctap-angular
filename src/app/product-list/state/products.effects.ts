import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { exhaustMap, map, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsResponse } from 'src/app/models/response.model';
import { ProductService } from 'src/app/product/services/product.service';
import * as ProductsActions from './products.actions';
import {
  selectPaginationInfo,
  selectProducts,
  selectQueryParams,
} from './products.selectors';

@Injectable()
export class ProductsEffects {
  updatePagination = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initializeQueryParams),
      map((action) => {
        const page = this.getQueryParamValue('page', 1);
        const limit = this.getQueryParamValue('limit', 9);
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
          .fetchProducts(1, paginationInfo.limit * paginationInfo.page)
          .pipe(
            map((res: ProductsResponse) =>
              ProductsActions.loadProductsSuccess({ res: res })
            )
          )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.loadCategories),
      exhaustMap((action) =>
        this.productService
          .fetchCategories()
          .pipe(
            map((res) => ProductsActions.loadCategoriesSuccess({ res: res }))
          )
      )
    )
  );

  searchProducts = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.searchProducts),
      concatLatestFrom((action) => this.store.select(selectPaginationInfo)),
      exhaustMap(([action, paginationInfo]) => {
        
        let searchKey = action.searchKey || this.getQueryParamValue('q', '');
        console.log(searchKey);
        return this.productService
          .searchProduct(searchKey, paginationInfo.page, paginationInfo.limit)
          .pipe(
            map((res) =>
              ProductsActions.searchProductsSuccess({ res, searchKey })
            )
          );
      })
    )
  );

  sortProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.changeSortType),
      concatLatestFrom((action) => this.store.select(selectProducts)),
      map(([action, products]) => {
        let newProducts: Product[] = JSON.parse(JSON.stringify(products));
        switch (action.sortType) {
          case 'price-ascending':
            newProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-descending':
            newProducts.sort((a, b) => b.price - a.price);
            break;
          case 'title-ascending':
            newProducts.sort((a, b) => {
              const firstTitle = a.title.toLowerCase();
              const secondTitle = b.title.toLowerCase();
              return firstTitle < secondTitle ? -1 : 1;
            });
            break;
          case 'title-descending':
            newProducts.sort((a, b) => {
              const firstTitle = a.title.toLowerCase();
              const secondTitle = b.title.toLowerCase();
              return firstTitle > secondTitle ? -1 : 1;
            });
            break;
          case 'date-ascending':
            newProducts.sort((a, b) => {
              const firstDate = new Date(a.updatedAt);
              const secondDate = new Date(b.updatedAt);
              return firstDate < secondDate ? -1 : 1;
            });
            break;
          case 'date-descending':
            newProducts.sort((a, b) => {
              const firstDate = new Date(a.updatedAt);
              const secondDate = new Date(b.updatedAt);
              return firstDate > secondDate ? -1 : 1;
            });
            break;
          default:
            newProducts = products;
        }
        return ProductsActions.updateProductsAfterSort({
          products: newProducts,
        });
      })
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
