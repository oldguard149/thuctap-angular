import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const productsFeatureKey = 'products';
export const selectProductsFeatureState =
  createFeatureSelector(productsFeatureKey);

export const selectProducts = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.docs
);

export const selectDisplayListType = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.displayListType
);

export const selectSortType = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.sortType
);

export const selectCurrentPage = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.page
);

export const selectPageLimit = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.limit
);

export const selectTotalNumberOfProducts = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => state.totalDocs
);

export const selectQueryParams = createSelector(
  selectProductsFeatureState,
  (state: ProductsState) => ({
    page: state.page,
    limit: state.limit,
    sortType: state.sortType,
  })
);

export const selectPaginationInfo = createSelector(
  selectCurrentPage,
  selectPageLimit,
  selectTotalNumberOfProducts,
  (page, limit, totalProducts) => ({ page, limit, totalProducts })
);
