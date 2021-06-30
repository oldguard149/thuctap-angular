import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/models/category.model';
import { Product } from 'src/app/models/product.model';
import * as ProductsActions from './products.actions';

export type SortTypes =
  | 'manual'
  | 'best-selling'
  | 'title-ascending'
  | 'title-descending'
  | 'price-ascending'
  | 'price-descending'
  | 'date-ascending'
  | 'date-descending';

export interface ProductsState {
  docs: Product[];
  page: number;
  limit: number;
  totalDocs: number;
  isLoading: boolean;
  displayListType: 'grid' | 'column';
  sortType: SortTypes;
  catetories: Category[];
}

const initialState: ProductsState = {
  docs: null,
  page: 1,
  limit: 10,
  totalDocs: 0,
  isLoading: true,
  displayListType: 'grid',
  sortType: 'manual',
  catetories: null,
};

export const productsReducer = createReducer(
  initialState,
  on(
    ProductsActions.updateQueryParams,
    (state: ProductsState, { page, limit, sortType }) => ({
      ...state,
      page,
      limit,
      sortType,
    })
  ),
  on(ProductsActions.loadProducts, (state) => ({...state, isLoading: true})),
  on(ProductsActions.loadProductsSuccess, (state: ProductsState, { res }) => ({
    ...state,
    limit: res.limit,
    docs: res.docs,
    totalPages: res.totalPages,
    totalDocs: res.totalDocs,
    isLoading: false,
  })),
  on(ProductsActions.loadCategoriesSuccess, (state, { res }) => ({
    ...state,
    catetories: res.docs,
  })),
  on(
    ProductsActions.changeListDisplayType,
    (state: ProductsState, { listType }) => ({
      ...state,
      displayListType: listType,
    })
  ),
  on(ProductsActions.changePage, (state: ProductsState, { page }) => ({
    ...state,
    page,
  })),
  on(ProductsActions.changePageLimit, (state: ProductsState, { limit }) => ({
    ...state,
    limit,
  })),
  on(ProductsActions.changeSortType, (state: ProductsState, { sortType }) => ({
    ...state,
    sortType,
  })),
  on(ProductsActions.updateProductsAfterSort, (state, { products }) => ({
    ...state,
    docs: products,
  })),
  on(ProductsActions.resetPage, (state) => ({ ...state, page: 1 }))
);
