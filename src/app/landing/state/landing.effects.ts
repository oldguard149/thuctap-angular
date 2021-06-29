import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { ProductsResponse } from 'src/app/models/response.model';
import { ProductService } from 'src/app/product/services/product.service';
import * as LandingPageActions from './landing.actions';

@Injectable()
export class LandingPageEffects {
  loadNewProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.loadAllTypeOfProducts),
      mergeMap((action) =>
        this.productService
          .fetchNewProducts()
          .pipe(
            map((res: ProductsResponse) =>
              LandingPageActions.loadNewProductsSuccess({ products: res.docs })
            )
          )
      )
    )
  );

  loadTodayDealProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.loadAllTypeOfProducts),
      mergeMap((action) =>
        this.productService
          .fetchTodayDealProducts()
          .pipe(
            map((res: ProductsResponse) =>
              LandingPageActions.loadTodayDealProductsSuccess({ products: res.docs })
            )
          )
      )
    )
  );

  loadBestSellerProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.loadAllTypeOfProducts),
      mergeMap((action) =>
        this.productService
          .fetchBestSellerProducts()
          .pipe(
            map((res: ProductsResponse) =>
              LandingPageActions.loadBestSellerProductsSuccess({ products: res.docs })
            )
          )
      )
    )
  );

  loadNewArrivalProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.loadAllTypeOfProducts),
      mergeMap((action) =>
        this.productService
          .fetchNewArrivalProducts()
          .pipe(
            map((res: ProductsResponse) =>
              LandingPageActions.loadNewArrivalsProductsSuccess({ products: res.docs })
            )
          )
      )
    )
  );

  loadFeatureProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LandingPageActions.loadAllTypeOfProducts),
      mergeMap((action) =>
        this.productService
          .fetchFeatureProducts()
          .pipe(
            map((res: ProductsResponse) =>
              LandingPageActions.loadFeatureProductsSuccess({ products: res.docs })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
