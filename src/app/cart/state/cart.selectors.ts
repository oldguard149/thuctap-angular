import * as fromCart from './cart.reducer';
import { createAction, createFeatureSelector, createSelector } from '@ngrx/store';

const selectCartFeatureState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const selectCartId = createSelector(
  selectCartFeatureState,
  fromCart.selectCartId
);

export const selectCartEntities = createSelector(
  selectCartFeatureState,
  fromCart.selectCartEntities
);

export const selectCartItems = createSelector(
  selectCartFeatureState,
  fromCart.selectCartItems
);

export const selectTotalCartItems = createSelector(
  selectCartFeatureState,
  fromCart.selectTotalCartItems
);

export const selectTotalPrice = createSelector(
  selectCartItems,
  (items) => items.reduce((total, item) => total += item.orderQuantity * item.price, 0)
);

export const selectCheckOutMessages = createSelector(
  selectCartFeatureState,
  state => state.messages
);
