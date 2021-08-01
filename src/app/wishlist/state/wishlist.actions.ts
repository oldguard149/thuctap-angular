import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { ProductsResponse } from "src/app/models/response.model";


export const loadWishlist = createAction(
    '[Wish List / Backend API] Load Wish List'
);

export const loadWishlistSuccess = createAction(
    '[Wish List / Backend API] Load Wish List Success',
    props<{res: ProductsResponse}>()
);

export const addToWishlist = createAction(
    '[Wish List / Backend API] Add To Wish List',
    props<{product: Product}>()
);

export const addToWishlistSuccess = createAction(
    '[Wish List] Add To Wish List Success',
    props<{message: string}>()
);

export const addToWishlistFailure = createAction(
    '[Wish List] Add To Wish List Failure',
    props<{message: string}>()
);

export const deleteFromWishlist = createAction(
    '[Wish List / Backend API] Delete From Wish List',
    props<{productId: string}>()
);

export const deleteFromWishlistSuccess = createAction(
    '[Wish List] Delete From Wish List Success',
    props<{message: string}>()
);

export const deleteFromWishlistFailure = createAction(
    '[Wish List] Delete From Wish List Failure',
    props<{message: string}>()
);

export const changeWishlistPage = createAction(
    '[Wish List] Change Page',
    props<{page: number}>()
);

export const wishListLoadMore = createAction(
    '[Wish List] Load More'
)