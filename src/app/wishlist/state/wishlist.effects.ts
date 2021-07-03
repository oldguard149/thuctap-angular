import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import { WishlistService } from '../services/wishlist.service';

import * as WishlistActions from './wishlist.actions';
import { selectWishlistPaginationInfo } from './wishlist.selectors';

@Injectable()
export class WishlistEffects {
  loadWishlist$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WishlistActions.loadWishlist),
      concatLatestFrom((action) =>
        this.store.select(selectWishlistPaginationInfo)
      ),
      exhaustMap(([action, paginationInfo]) =>
        this.wishlistService
          .get(paginationInfo.page, paginationInfo.limit)
          .pipe(
            map((res) => {
              console.log(res);
              return WishlistActions.loadWishlistSuccess({ res });
            })
          )
      )
    )
  );

  addToWishList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WishlistActions.addToWishlist),
        exhaustMap((action) =>
          this.wishlistService.add(action.product.id).pipe(
            map((res) => {
              console.log(res);
              this.message.createMessage(res.message);
            })
          )
        )
      ),
    { dispatch: false }
  );

  deleteFromWishList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WishlistActions.deleteFromWishlist),
      exhaustMap((action) =>
        this.wishlistService
          .delete(action.productId)
          .pipe(
            map((res) => {
              console.log(res);
              this.message.createMessage(res.message)
            })
          )
      )
    ), {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private wishlistService: WishlistService,
    private message: PopupMessageService
  ) {}
}
