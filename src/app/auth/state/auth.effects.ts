import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
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
          catchError((error) => {
            return of(AuthActions.loginFailure({ error: error }));
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
          map((res) => {
            this.router.navigateByUrl('/login');
            return AuthActions.registerSuccess({
              msg: [{ content: 'sdf', type: 'success' }],
            });
          }),
          catchError((error) => {
            const messages = error.message.map(msg => ({type: 'failure', content: msg.msg}))
            return of(
              AuthActions.registerFailure({
                error: messages,
              })
            )
          })
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      map(() => {
        localStorage.removeItem(authLocalStorageKey)
      })
    ), {dispatch: false}
  );

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private router: Router
  ) {}
}
