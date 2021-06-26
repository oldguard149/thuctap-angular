import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Product } from "src/app/models/product.model";
import { ProductDetailsState } from "./product-details.reducer";

export const productDetailsFeatureKey = 'product'

export const selectProductDetailsFeature = createFeatureSelector(productDetailsFeatureKey);

export const selectProductDetails = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.item
);

export const selectProductDetailsLoading = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.loading
)

export const selectRecommendProducts = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.recommendProducts
)

export const selectProductQuantity = createSelector(
    selectProductDetails,
    (product: Product) => product.quantity
)

export const selectProductDetailsBreadcrumb = createSelector(
    selectProductDetailsFeature,
    (state: ProductDetailsState) => state.breadcrumb
)