import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';

export const productsFeatureKey = 'products';
export const selectProductsFeatureState =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProducts = createSelector(
  selectProductsFeatureState,
  (state) => state.docs
);

export const selectCategories = createSelector(
  selectProductsFeatureState,
  (state) => state.catetories
)

export const selectDisplayListType = createSelector(
  selectProductsFeatureState,
  (state) => state.displayListType
);

export const selectSortType = createSelector(
  selectProductsFeatureState,
  (state) => state.sortType
);

export const selectQueryParams = createSelector(
  selectProductsFeatureState,
  (state) => ({
    page: state.page,
    limit: state.limit,
    sortType: state.sortType,
  })
);

export const selectCurrentPage = createSelector(
  selectProductsFeatureState,
  (state) => state.page
);

export const selectPageLimit = createSelector(
  selectProductsFeatureState,
  (state) => state.limit
);

export const selectTotalNumberOfProducts = createSelector(
  selectProductsFeatureState,
  (state) => state.totalDocs
);

export const selectPaginationInfo = createSelector(
  selectCurrentPage,
  selectPageLimit,
  selectTotalNumberOfProducts,
  (page, limit, totalProducts) => ({ page, limit, totalProducts })
);

export const selectProductListIsLoading = createSelector(
  selectProductsFeatureState,
  state => state.isLoading
)
