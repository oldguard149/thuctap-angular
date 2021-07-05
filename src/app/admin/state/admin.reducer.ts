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
  selectedOrder: Order;

  totalDocs: number;
  limit: number;
  page: number;
  messages: ResponseMessage[];
  breadcrumbData: BreadCrumb[];
  loading: boolean;
}

const initialState: AdminState = {
  products: null,
  selectedProduct: null,
  categories: null,
  selectedCategory: null,
  orders: null,
  selectedOrder: null,
  totalDocs: null,
  limit: 10,
  page: 1,
  messages: null,
  breadcrumbData: null,
  loading: true
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.loadProductsSuccess, (state, { res }) => ({
    ...state,
    products: res.docs,
    totalDocs: res.totalDocs,
    limit: res.limit,
    loading: false
  })),
  on(AdminActions.setSelectedProduct, (state, { index }) => ({
    ...state,
    selectedProduct: state.products[index],
  })),
  on(AdminActions.changePage, (state, { page }) => ({ ...state, page })),
  on(AdminActions.loadCategoriesSuccess, (state, { res }) => ({
    ...state,
    categories: res.docs,
    loading: false
  })),
  on(AdminActions.setSelectedCategory, (state, { index }) => ({
    ...state,
    selectedCategory: state.categories[index],
  })),
  on(AdminActions.setAdminMessages, (state, { messages }) => ({
    ...state,
    messages,
  })),
  on(AdminActions.resetAdminMessages, (state) => ({
    ...state,
    messages: null,
  })),
  on(AdminActions.resetPaginationInfo, (state) => ({
    ...state,
    page: 1,
    limit: 10,
    totalDocs: null,
  })),
  on(AdminActions.loadOrdersSuccess, (state, { res }) => ({
    ...state,
    orders: res.docs,
    loading: false,
    totalDocs: res.totalDocs
  })),
  on(AdminActions.setSelectedOrder, (state, { index }) => ({
    ...state,
    selectedOrder: state.orders[index],
  })),
  on(AdminActions.loadProducts, (state) => ({...state, loading: true})),
  on(AdminActions.loadCategories, (state) => ({...state, loading: true})),
  on(AdminActions.loadOrders, state => ({...state, loading: true}))
);
