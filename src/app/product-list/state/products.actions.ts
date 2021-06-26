import { createAction, props } from "@ngrx/store";
import { ProductsResponse } from "src/app/models/response.model";


// look at url and update (page, limit, sortType) if they exist in query params 
export const initializeQueryParams = createAction(
    '[Product List / OnInit] Initilize Query Params'
);

export const updateQueryParams = createAction(
    '[Product List] Update Query Params',
    props<{page: number, limit: number, sortType: string}>()
)

// page and limit will select from store
export const loadProducts = createAction(
    '[Products List / Backend API] Load Products',
);

export const loadProductsSuccess = createAction(
    '[Products List / Backend API] Load Products Success',
    props<{res: ProductsResponse}>()
);

export const loadProductsFailure = createAction(
    '[Products List / Backend API] Load Products Failure',
    props<{error: any}>()
);

export const changeListDisplayType = createAction(
    '[Product List] Change List Display Type',
    props<{listType: 'grid' | 'column'}>()
)

export const changeSortType = createAction(
    '[Product List] Change Sort Type',
    props<{sortType: string}>()
)

export const addToCart = createAction(
    '[Product List] Add To Cart',
    props<{productId: string}>()
);

export const changePageLimit = createAction(
    '[Product List / Backend API] Change Page Limit',
    props<{limit: number}>()
)

export const changePage = createAction(
    '[Product List / Backend API] Change Page',
    props<{page: number}>()
);

export const resetPage = createAction(
    '[Product List / onDestroy] Reset Page'
)