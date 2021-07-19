import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NzMessageService } from 'ng-zorro-antd/message';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';
import { UserProfile } from 'src/app/models/userProfile.model';
import { AuthService } from 'src/app/services/auth.service';
import { PopupMessageService } from 'src/app/services/popup-message.service';
import * as AuthActions from './auth.actions';
import { authLocalStorageKey } from './auth.reducer';
import { selectCurrentActionUrl } from './auth.selectors';

@Injectable()
export class AuthEffects {
  loadAuthTokenFromLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuthTokenFromLocalStorage),
      map(() => {
        const token = localStorage.getItem(authLocalStorageKey);
        if (token === null) {
          return AuthActions.localStorageEmpty();
        } else {
          // check if token from localStorage have admin role
          // role=1 for admin, role=2 for customer
          const tokenPayload = JSON.parse(window.atob(token.split('.')[1]));
          if (tokenPayload.payload?.role === 1) {
            return AuthActions.adminLoginSuccess({ token });
          }
          return AuthActions.loadAuthTokenFromLocalStorageSuccess({
            token: token,
          });
        }
      })
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      concatLatestFrom((action) => this.store.select(selectCurrentActionUrl)),
      exhaustMap(([action, currentActionUrl]) =>
        this.authService.login(action.body).pipe(
          map((res: any) => {
            if (currentActionUrl) {
              this.router.navigateByUrl(currentActionUrl);
            } else {
              this.router.navigateByUrl('/');
            }
            this.messageService.createMessage('Log in successfully', 'success');
            return AuthActions.loginSuccess({ token: res.token });
          }),
          catchError((error: ResponseMessage[]) => {
            return of(AuthActions.loginFailure({ error: error }));
          })
        )
      )
    )
  );

  adminLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.adminLogin),
      exhaustMap((action) =>
        this.authService.login(action.body).pipe(
          map((res: any) => {
            this.router.navigateByUrl('/admin');
            this.messageService.createMessage('Log in successfully', 'success');
            return AuthActions.adminLoginSuccess({ token: res.token });
          }),
          catchError((error: ResponseMessage[]) => {
            return of(AuthActions.loginFailure({ error: error }));
          })
        )
      )
    )
  );

  saveTokenToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess, AuthActions.adminLoginSuccess),
        map((action) => {
          const token = action.token;
          localStorage.removeItem(authLocalStorageKey);
          localStorage.setItem(authLocalStorageKey, token);
        })
      ),
    { dispatch: false }
  );

  getUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        AuthActions.loadAuthTokenFromLocalStorageSuccess,
        AuthActions.loginSuccess
      ),
      exhaustMap((action) =>
        this.authService.getProfile().pipe(
          map((userProfile: UserProfile) =>
            AuthActions.loadUserProfileSuccess({ userProfile })
          ),
          catchError((error: ResponseMessage[]) => {
            return of(AuthActions.loadUserProfileFailure({ error }));
          })
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      exhaustMap((action) =>
        this.authService.register(action.body).pipe(
          map((res: any) => {
            this.router.navigateByUrl('/login');
            return AuthActions.registerSuccess({
              msg: [{ content: res.msg, type: 'success' }],
            });
          }),
          catchError((error: ResponseMessage[]) => {
            return of(
              AuthActions.registerFailure({
                error: error,
              })
            );
          })
        )
      )
    )
  );

  removeAuthTokenFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout, AuthActions.loadUserProfileFailure),
        map(() => {
          localStorage.removeItem(authLocalStorageKey);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        map(() => {
          this.router.navigateByUrl('/');
          this.messageService.createMessage(
            'You have been logged out',
            'success'
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router,
    private store: Store,
    private messageService: PopupMessageService
  ) {}
}
