import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const loadAllTypeOfProducts = createAction(
    '[Landing Page / Backend API] Load All Type Of Products'
)

export const loadNewProducts = createAction(
    '[Landing Page / Backend API] Load New Products'
);

export const loadNewProductsSuccess = createAction(
    '[Landing Page / Backend API] Load New Products Success',
    props<{products: Product[]}>()
);

export const loadTodayDealProducts = createAction(
    '[Landing Page / Backend API] Load Today Deal Products'
);

export const loadTodayDealProductsSuccess = createAction(
    '[Landing Page / Backend API] Load Today Deal Products Success',
    props<{products: Product[]}>()
);

export const loadBestSellerProducts = createAction(
    '[Landing Page / Backend API] Best Seller Products'
);

export const loadBestSellerProductsSuccess = createAction(
    '[Landing Page / Backend API] Best Seller Products Success',
    props<{products: Product[]}>()
);

export const loadNewArrivalsProducts = createAction(
    '[Landing Page / Backend API] Load New Arrivals Products'
);

export const loadNewArrivalsProductsSuccess= createAction(
    '[Landing Page / Backend API] Load New Arrivals Products Success',
    props<{products: Product[]}>()
);

export const loadFeatureProducts = createAction(
    '[Landing Page / Backend API] Load Feature Products'
);

export const loadFeatureProductsSuccess = createAction(
    '[Landing Page / Backend API] Load Feature Products Success',
    props<{products: Product[]}>()
);