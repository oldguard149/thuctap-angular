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

export const setAdminMessages = createAction(
  '[Admin] Set Admin Messages',
  props<{ messages: ResponseMessage[] }>()
);

export const resetAdminMessages = createAction(
  '[Admin] Reset Admin Messages'
)

export const changePage = createAction(
  '[Admin] Change Page',
  props<{ page: number }>()
);

export const changePageLimit = createAction(
  '[Admin] Change Page Limit',
  props<{ limit: number }>()
);

export const resetPaginationInfo = createAction(
  '[Admin] Reset Pagination Info'
)

export const adminErorr = createAction(
  '[Admin] Error'
);


// ======================================================================================================
// ============================================= PRODUCT ===============================================
export const loadProducts = createAction('[Admin Product] Load Products');

export const loadProductsSuccess = createAction(
  '[Admin Product] Load Products Success',
  props<{ res: ProductsResponse }>()
);

export const setSelectedProduct = createAction(
  '[Admin Product] Select Product',
  props<{ index: number }>()
);

export const createProduct = createAction(
  '[Admin Product] Create Product',
  props<{ body: ProductBody }>()
);

export const updateProduct = createAction(
  '[Admin Product] Update Product',
  props<{ body: ProductBody }>()
);

export const deleteProduct = createAction(
  '[Admin Product] Delete Product',
);

export const deactiveProduct = createAction(
  '[Admin Product] Active Product',
  props<{ productId: string }>()
);

export const activeProduct = createAction(
  '[Admin Product] Active Product',
  props<{ productId: string }>()
);

export const deleteProductSuccess = createAction(
  '[Admin Product] Delete Product Success',
  props<{ messages: ResponseMessage[] }>()
)

// ======================================================================================================
// ============================================= CATEGORY ===============================================

export const loadCategories = createAction('[Admin Catagory] Load Categories');

export const loadCategoriesSuccess = createAction(
  '[Admin Category] Load Categories Success',
  props<{ res: CategoriesResponse }>()
);

export const setSelectedCategory = createAction(
  '[Admin Category] Set Selected Category',
  props<{index: number}>()
)

export const createCategory = createAction(
  '[Admin Category] Create Category',
  props<{ body: CategoryBody }>()
);

// update and delete get current category id from selectedCategory
export const updateCategory = createAction(
  '[Admin Category] Upate Category',
  props<{ body: CategoryBody }>()
);

export const deleteCategory = createAction(
  '[Admin Category] Delete Category',
);

export const activeCategory = createAction(
  '[Admin Category] Active Category',
  props<{ categoryId: string }>()
);

export const deactiveCategory = createAction(
  '[Admin Category] Deactive Category',
  props<{ categoryId: string }>()
);

export const deleteCategorySuccess = createAction(
  '[Admin Product] Delete Product Success',
  props<{ messages: ResponseMessage[] }>()
)

// ======================================================================================================
// ============================================= ORDER ===============================================
export const loadOrders = createAction(
  '[Admin Order] Load Orders'
);

export const loadOrdersSuccess = createAction(
  '[Admin Order] Load Orders Success',
  props<{res: OrderResponse}>()
);

export const checkStatusOrder = createAction(
  '[Admin Order] Check Status Order',
  props<{ body: CheckStatusOrderBody}>()
);

export const setSelectedOrder = createAction(
  '[Admin Order] Select Order',
  props<{index: number}>()
)