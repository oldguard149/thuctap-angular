import { createReducer, on } from '@ngrx/store';
import { Category } from 'src/app/models/category.model';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { ResponseMessage } from 'src/app/models/response.model';
import { BreadCrumb } from 'src/app/shared/components/breadcrumb/breadcrumb.component';

import * as AdminActions from './admin.actions';

export interface AdminState {
  products: Product[];
  selectedProduct: Product;
  categories: Category[];
  selectedCategory: Category;
  orders: Order[];
  selectedOder: Order;

  totalDocs: number;
  limit: number;
  page: number;
  messages: ResponseMessage[];
  breadcrumbData: BreadCrumb[];
}

const initialState: AdminState = {
  products: null,
  selectedProduct: null,
  categories: null,
  selectedCategory: null,
  orders: null,
  selectedOder: null,
  totalDocs: null,
  limit: 10,
  page: 1,
  messages: null,
  breadcrumbData: null,
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.loadProductsSuccess, (state, { res }) => ({
    ...state,
    products: res.docs,
    totalDocs: res.totalDocs,
    limit: res.limit,
  })),
  on(AdminActions.setSelectedProduct, (state, { index }) => ({
    ...state,
    selectedProduct: state.products[index],
  })),
  on(AdminActions.changePage, (state, { page }) => ({ ...state, page })),
  on(AdminActions.loadCategoriesSuccess, (state, { res }) => ({
    ...state,
    categories: res.docs,
  })),
  on(AdminActions.loadOrdersSuccess, (state, { res }) => ({
    ...state,
    orders: res.docs,
  })),
  on(AdminActions.setSelectedCategory, (state, { index }) => ({
    ...state,
    selectedCategory: state.categories[index],
  })),
  on(AdminActions.setAdminMessages, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(AdminActions.resetAdminMessages, (state) => ({...state, messages: null}))
);
