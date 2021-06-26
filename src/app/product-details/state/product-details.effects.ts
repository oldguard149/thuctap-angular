import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadProductDetails,
  loadProductDetailsSuccess,
} from './product-details.actions';
import { switchMap, map, exhaustMap, tap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/product/services/product.service';

@Injectable()
export class ProductDetailsEffects {
  loadProductDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProductDetails),
      exhaustMap((action) =>
        this.productService
          .getProductDetails(action.productId)
          .pipe(
            map((product: Product) => loadProductDetailsSuccess({ product }))
          )
      )
    )
  );

  // implement load recommend products
  // loadRecommendProduct$ = createEffect(() => this.actions$.pipe())

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}
