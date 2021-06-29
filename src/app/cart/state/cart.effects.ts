import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { CartItem } from 'src/app/models/cartItem.model';
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

  saveCartToLocalStorage2$ = createEffect(
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

   // saveCartToLocalStorage$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(CartActions.saveCartToLocalStorage),
  //       concatLatestFrom((action) =>
  //         this.store.select(CartSelectors.selectCartItems)
  //       ),
  //       map(([action, items]) => {
  //         localStorage.removeItem(cartLocalStorageKey);
  //         localStorage.setItem(cartLocalStorageKey, JSON.stringify(items));
  //         console.log(JSON.stringify(items));
  //       })
  //     ),
  //   { dispatch: false }
  // );

  constructor(private actions$: Actions, private store: Store) {}
}
