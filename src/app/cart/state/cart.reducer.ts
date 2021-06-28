import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CartItem } from 'src/app/models/cartItem.model';
import * as CartActions from './cart.actions';

export interface CartState extends EntityState<CartItem> {}
export const adapter: EntityAdapter<CartItem> = createEntityAdapter<CartItem>();
const initialState: CartState = adapter.getInitialState();
export const cartLocalStorageKey = 'cart';

export const cartReducer = createReducer(
  initialState,
  on(CartActions.loadCartFromLocalStorageSuccess, (state, { items }) =>
    adapter.setAll(items, state)
  ),
  on(CartActions.productCardAddToCart, (state, { item }) => {
    return handleAddToCart(state, item);
  }),
  on(CartActions.productDetailAddToCart, (state, { item }) => {
    return handleAddToCart(state, item);
  }),
  on(CartActions.removeCartItem, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(CartActions.removeCartItemInHeader, (state, { id }) => {
    return adapter.removeOne(id, state);
  })
);



// ====================== helper function ===============================
function handleAddToCart(state: CartState, item: CartItem) {
  if (isEntityExist(state, item)) {
    const newOrderQty = getNewOrderQty(state, item);
    return adapter.updateOne(
      { id: item.id, changes: { orderQuantity: newOrderQty } },
      state
    );
  } else {
    return adapter.addOne(item, state);
  }
}

function isEntityExist(state: CartState, item: CartItem) {
  return state.entities[item.id] !== undefined;
}

function getNewOrderQty(state: CartState, item: CartItem) {
  return item['orderQuantity'] + state.entities[item.id].orderQuantity;
}