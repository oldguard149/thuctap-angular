import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadProductDetails = createAction(
  '[Product Details / Backend API] Load Product Details',
  props<{ productId: string }>()
);

export const loadProductDetailsSuccess = createAction(
  '[Product Details / Backend API] Load Product Details Success',
  props<{ product: Product }>()
);


// not implement yet
export const loadProductDetailsFailure = createAction(
  '[Product Details / Backend API] Load Product Details Error',
  props<{error}>()
);

export const sendReview = createAction(
  '[Product Details] Send Review',
  props<{ productId: string, data: any }>()
);

export const loadRecommendProducts = createAction(
  '[Product Details / Backend API] Load Recommend Products',
  props<{ productId: string }>()
);

export const loadRecommendProductsSuccess = createAction(
    '[Product Details] Load Recommend Product Success',
    props<{products: Product[]}>()
)

export const addToCart = createAction(
  '[Product Details] Add To Cart',
  props<{ productId: string, quantity: number }>()
);
