import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { setCurrentAction } from 'src/app/auth/state/auth.actions';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import { WishlistService } from '../services/wishlist.service';

import * as WishlistActions from './wishlist.actions';
import { selectWishlistPaginationInfo } from './wishlist.selectors';

interface WishlistUnAuthorizeError {
  isUnAuthError: boolean;
  message: string;
}

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
              this.message.createMessage(res.message, 'success');
            }),
            catchError((error: WishlistUnAuthorizeError) => {
              this.handleAddAndDeleteError(error);
              return of('');
            })
          )
        )
      ),
    { dispatch: false }
  );

  deleteFromWishList$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(WishlistActions.deleteFromWishlist),
        exhaustMap((action) =>
          this.wishlistService.delete(action.productId).pipe(
            map((res) => {
              this.message.createMessage(res.message, 'success');
            }),
            catchError((error: WishlistUnAuthorizeError) => {
              this.handleAddAndDeleteError(error);
              return of('');
            })
          )
        )
      ),
    { dispatch: false }
  );

  private handleAddAndDeleteError(error: WishlistUnAuthorizeError) {
    if (error.isUnAuthError) {
      this.store.dispatch(
        setCurrentAction({
          currentActionUrl: '/wishlist',
          messages: [
            {
              type: 'failure',
              content: 'You need to login before access wishlist',
            },
          ],
        })
      );
      this.router.navigateByUrl('/login')
    } else {
      this.message.createMessage(error.message, 'error', 10000);
    }
  }

  constructor(
    private actions$: Actions,
    private store: Store,
    private wishlistService: WishlistService,
    private message: PopupMessageService,
    private router: Router
  ) {}
}
