import { createAction, props } from "@ngrx/store";
import { CartItem } from "src/app/models/cartItem.model";
import { Order } from "src/app/models/order.model";
import { ResponseMessage } from "src/app/models/response.model";


export const loadCartFromLocalStorage = createAction(
    '[App Component / Local Storage] Load Cart From LocalStorage'
);

export const loadCartFromLocalStorageSuccess = createAction(
    '[Local Storage] Load Cart From LocalStorage Success',
    props<{items: CartItem[]}>()
);

export const localStorageEmpty = createAction(
    '[Local Storage] Local Storage Empty'
);

// after perform (add, update, remove) item, call saveCart
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

export const wishlistAddToCart = createAction(
    '[Wishlist] Add To Cart',
    props<{item: CartItem}>()
)

export const updateOrderQuantity = createAction(
    '[Cart] Update Quantity',
    props<{id: string, orderQty: number}>()
);

export const removeCartItemInHeader = createAction(
    '[Header] Remove Cart Item',
    props<{id: string}>()
);

export const removeCartItem = createAction(
    '[Cart] Remove Cart Item',
    props<{id: string}>()
)

export const checkOut = createAction(
    '[Check Out / Backend API] Check Out',
    props<{body: any}>()
);

// when success, clear entity and localStorage
export const checkOutSuccess = createAction(
    '[Check Out / Backend API] Check Out Success',
    props<{res: Order, messages: ResponseMessage[]}>()
);

export const checkOutFailure = createAction(
    '[Check Out / Backend API] Check Out Failure',
    props<{error: ResponseMessage[]}>()
);

export const clearCheckOutMessages = createAction(
    '[Check Out] Clear Messages'
)