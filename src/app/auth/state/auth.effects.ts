import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { ResponseMessage } from 'src/app/models/response.model';
import { UserProfile } from 'src/app/models/userProfile.model';
import { AuthService } from 'src/app/services/auth.service';
import * as AuthActions from './auth.actions';
import { authLocalStorageKey } from './auth.reducer';

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
      exhaustMap((action) =>
        this.authService.login(action.body).pipe(
          map((res: any) => {
            this.router.navigateByUrl('/');
            return AuthActions.loginSuccess({ token: res.token });
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
        ofType(AuthActions.loginSuccess),
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

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}
}
