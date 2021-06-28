import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/models/cartItem.model";


export const loadCartFromLocalStorage = createAction(
    '[App Component / Local Storage] Load Cart From LocalStorage'
);

export const loadCartFromLocalStorageSuccess = createAction(
    '[App Component / Local Storage] Load Cart From LocalStorage Success',
    props<{items: CartItem[]}>()
);

export const saveCartToLocalStorage = createAction(
    '[Local Storage] Save Cart To Local Storage'
);

export const productCardAddToCart = createAction(
    '[Product Cart] Add To Cart',
    props<{item: CartItem}>()
)

export const productDetailAddToCart = createAction(
    '[Product Details] Add To Cart',
    props<{item: CartItem}>()
);

export const updateOrderQuantity = createAction(
    '[Cart] Update Quantity'
);

export const removeCartItemInHeader = createAction(
    '[Header] Remove Cart Item',
    props<{id: string}>()
);

export const removeCartItem = createAction(
    '[Cart] Remove Cart Item',
    props<{id: string}>()
)


export const landingPageAddToCart = createAction(
    '[Landing Page] Add To Cart',
    props<{item: CartItem}>()
);

export const productListAddToCart = createAction(
    '[Product List] Add To Cart',
    props<{item: CartItem}>()
);