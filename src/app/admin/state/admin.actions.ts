import { createAction, props } from '@ngrx/store';
import { OrderResponse } from 'src/app/models/order.model';
import {
  CategoriesResponse,
  ProductsResponse,
  ResponseMessage,
} from 'src/app/models/response.model';
import { CategoryBody } from '../services/category-admin.service';
import { CheckStatusOrderBody } from '../services/order-admin.service';
import { ProductBody } from '../services/product-admin.service';

export const setMessages = createAction(
  '[Admin] Set Messages',
  props<{ messages: ResponseMessage[] }>()
);

export const changePage = createAction(
  '[Admin] Change Page',
  props<{ page: number }>()
);

export const changePageLimit = createAction(
  '[Admin] Change Page Limit',
  props<{ limit: number }>()
);

// ============================================= PRODUCT ===============================================
export const loadProducts = createAction('[Admin Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Admin Product] Load Products Success',
  props<{ res: ProductsResponse }>()
);

export const selectProduct = createAction(
  '[Admin Product] Select Product',
  props<{ index: number }>()
);

export const createProduct = createAction(
  '[Admin Product] Create Product',
  props<{ body: ProductBody }>()
);

export const updateProduct = createAction(
  '[Admin Product] Update Product',
  props<{ productId: string; body: ProductBody }>()
);

export const deleteProduct = createAction(
  '[Admin Product] Delete Product',
  props<{ productId: string }>()
);

export const deactiveProduct = createAction(
  '[Admin Product] Active Product',
  props<{ productId: string }>()
);

export const activeProduct = createAction(
  '[Admin Product] Active Product',
  props<{ productId: string }>()
);

// ======================================================================================================
// ============================================= CATEGORY ===============================================

export const loadCategories = createAction('[Admin Catagory] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Admin Catagory] Load Categories Success',
  props<{ res: CategoriesResponse }>()
);

export const createCategory = createAction(
  '[Admin Category] Create Category',
  props<{ body: CategoryBody }>()
);

export const updateCategory = createAction(
  '[Admin Category] Upate Category',
  props<{ categoryId: string; body: CategoryBody }>()
);

export const deleteCategory = createAction(
  '[Admin Category] Delete Category',
  props<{ categoryId: string }>()
);

export const activeCategory = createAction(
  '[Admin Category] Active Category',
  props<{ categoryId: string }>()
);

export const deactiveCategory = createAction(
  '[Admin Category] Deactive Category',
  props<{ categoryId: string }>()
);

// ======================================================================================================
// ============================================= ORDER ===============================================
export const loadOrders = createAction(
  '[Admin Order] Load Orders'
);

export const loadOrdersSuccess = createAction(
  '[Admin Order] Load Orders',
  props<{res: OrderResponse}>()
);

export const checkStatusOrder = createAction(
  '[Admin Order] Check Status Order',
  props<{orderId: string, body: CheckStatusOrderBody}>()
)