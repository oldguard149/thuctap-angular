import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { CategoriesResponse, ProductsResponse } from "src/app/models/response.model";
import { SortTypes } from "./products.reducer";


// look at url and update (page, limit, sortType) if they exist in query params 
export const initializeQueryParams = createAction(
    '[Product List / OnInit] Initilize Query Params'
);

export const updateQueryParams = createAction(
    '[Product List] Update Query Params',
    props<{page: number, limit: number, sortType: SortTypes}>()
)

// page and limit will select from store
export const loadProducts = createAction(
    '[Products List / Backend API] Load Products',
);

export const loadProductsSuccess = createAction(
    '[Products List / Backend API] Load Products Success',
    props<{res: ProductsResponse}>()
);

export const loadCategories = createAction(
    '[Products List / Backend API] Load Categories'
);

export const loadCategoriesSuccess = createAction(
    '[Products List / Backend API] Load Categories Success',
    props<{res: CategoriesResponse}>()
)

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
    props<{sortType: SortTypes}>()
)

export const updateProductsAfterSort = createAction(
    '[Product List] Update Products After Sort',
    props<{products: Product[]}>()
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