import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cartItem.model';
import { Order } from 'src/app/models/order.model';
import { ResponseMessage } from 'src/app/models/response.model';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import { CheckoutService } from '../services/checkout.service';
import * as CartActions from './cart.actions';
import { cartLocalStorageKey } from './cart.reducer';
import * as CartSelectors from './cart.selectors';

@Injectable()
export class CartEffects {
  loadCartItemsFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCartFromLocalStorage),
      map((action) => {
        const items = JSON.parse(
          localStorage.getItem(cartLocalStorageKey)
        ) as CartItem[];
        if (items !== null) {
          return CartActions.loadCartFromLocalStorageSuccess({ items });
        }
        return CartActions.localStorageEmpty();
      })
    )
  );

  saveCartToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CartActions.productCardAddToCart,
          CartActions.productDetailAddToCart,
          CartActions.updateOrderQuantity,
          CartActions.removeCartItem,
          CartActions.removeCartItemInHeader
        ),
        concatLatestFrom((action) =>
          this.store.select(CartSelectors.selectCartItems)
        ),
        map(([action, items]) => {
          localStorage.removeItem(cartLocalStorageKey);
          localStorage.setItem(cartLocalStorageKey, JSON.stringify(items));
        })
      ),
    { dispatch: false }
  );

  checkOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.checkOut),
      exhaustMap((action) =>
        this.checkoutService.checkout(action.body).pipe(
          map((res: Order) => {
            this.router.navigateByUrl(`/orders/${res._id}`);
            return CartActions.checkOutSuccess({
              res: res,
              messages: [{ type: 'success', content: 'Check out success' }],
            });
          }),
          catchError((error: ResponseMessage[]) =>
            of(CartActions.checkOutFailure({ error }))
          )
        )
      )
    )
  );

  clearCartInLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.checkOutSuccess),
        map(() => {
          localStorage.removeItem(cartLocalStorageKey);
        })
      ),
    { dispatch: false }
  );

  showSuccessAddToCartMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          CartActions.productCardAddToCart,
          CartActions.productDetailAddToCart,
          CartActions.wishlistAddToCart
        ),
        map(() =>
          this.message.createMessage('Item has been added to cart', 'success')
        )
      ),
    { dispatch: false }
  );

  showSuccessRemoveFromCartMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.removeCartItem),
        map(() =>
          this.message.createMessage(
            'Item has been removed from cart',
            'success'
          )
        )
      ),
    { dispatch: false }
  );

  showSuccessUpdateCartQuantityMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CartActions.updateOrderQuantity),
        map(() =>
          this.message.createMessage(
            'Item quantity has been updated',
            'success'
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private checkoutService: CheckoutService,
    private message: PopupMessageService,
    private router: Router
  ) {}
}
