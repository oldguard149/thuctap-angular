import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';
import * as ProductsActions from './products.actions';

export interface ProductsState {
  docs: Product[];
  page: number;
  limit: number;
  totalDocs: number;
  loading: boolean;
  displayListType: 'grid' | 'column';
  sortType: string;
}

const initialState: ProductsState = {
  docs: [],
  page: 1,
  limit: 10,
  totalDocs: 0,
  loading: true,
  displayListType: 'grid',
  sortType: 'manual',
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
  on(ProductsActions.loadProductsSuccess, (state: ProductsState, { res }) => ({
    ...state,
    limit: res.limit,
    docs: res.docs,
    totalPages: res.totalPages,
    totalDocs: res.totalDocs,
    loading: false,
  })),
  on(
    ProductsActions.changeListDisplayType,
    (state: ProductsState, { listType }) => ({
      ...state,
      displayListType: listType,
    })
  ),
  on(ProductsActions.changeSortType, (state: ProductsState, { sortType }) => ({
    ...state,
    sortType,
  })),
  on(ProductsActions.changePage, (state: ProductsState, { page }) => ({
    ...state,
    page,
  })),
  on(ProductsActions.changePageLimit, (state: ProductsState, { limit }) => ({
    ...state,
    limit,
  })),
  on(ProductsActions.resetPage, (state) => ({ ...state, page: 1 }))
);
