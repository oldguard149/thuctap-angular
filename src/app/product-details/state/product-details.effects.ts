import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProductDetails,
  loadProductDetailsSuccess,
  loadRecommendProducts,
  loadRecommendProductsSuccess,
} from './product-details.actions';
import { map, exhaustMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product/services/product.service';

@Injectable()
export class ProductDetailsEffects {
  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductDetails),
      exhaustMap((action) =>
        this.productService
          .fetchProductDetails(action.productId)
          .pipe(
            map((product: Product) => loadProductDetailsSuccess({ product }))
          )
      )
    )
  );

  loadRecommendProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadRecommendProducts),
      exhaustMap((action) =>
        this.productService
          .fetchNewProducts()
          .pipe(map((res) => loadRecommendProductsSuccess({ products: res.docs })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
