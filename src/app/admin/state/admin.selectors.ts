import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminState } from './admin.reducer';

export const AdminFeatureKey = 'admin';
export const adminFeatureState =
  createFeatureSelector<AdminState>(AdminFeatureKey);

export const selectProducts = createSelector(
  adminFeatureState,
  (state) => state.products
);

export const selectSelectedProduct = createSelector(
  adminFeatureState,
  (state) => state.selectedProduct
);

export const selectCategories = createSelector(
  adminFeatureState,
  (state) => state.categories
);

export const selectSelectedCategory = createSelector(
  adminFeatureState,
  (state) => state.selectedCategory
);

export const selectOrders = createSelector(
  adminFeatureState,
  (state) => state.orders
);
export const selectSelectedOrder = createSelector(
  adminFeatureState,
  (state) => state.selectedOrder
);
export const selectPaginationInfo = createSelector(
  adminFeatureState,
  (state) => ({
    page: state.page,
    limit: state.limit,
    totalItems: state.totalDocs,
  })
);

export const selectAdminMessages = createSelector(
  adminFeatureState,
  (state) => state.messages
);

export const selectAdminLoading = createSelector(
  adminFeatureState,
  state => state.loading
)

export const selectCategoriesForSelectData = createSelector(
  adminFeatureState,
  (state) =>
    state.categories.map((cat) => ({ label: cat.name, value: cat._id }))
);

export const selectIsActiveForSelectData = createSelector(
  adminFeatureState,
  (state) => [
    { label: 'Active', value: true },
    { label: 'Deactive', value: false },
  ]
);

export const selectCheckStatusOrderForSelectData = createSelector(
  adminFeatureState,
  () => [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Cancel', value: 'CANCEL' },
    { label: 'Success', value: 'SUCCESS' },
  ]
);
