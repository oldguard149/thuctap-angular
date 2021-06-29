import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { ResponseMessage } from 'src/app/models/response.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  token: string;
  messages: ResponseMessage[];
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null,
  messages: [],
};

export const authLocalStorageKey = 'auth';

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loadAuthTokenFromLocalStorageSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isLoggedIn: true,
  })),
  on(AuthActions.loginSuccess, (state, { token }) => ({
    ...state,
    token: token,
    isLoggedIn: true,
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    messages: error,
  })),
  on(AuthActions.registerSuccess, (state, { msg }) => ({
    ...state,
    messages: msg,
  })),
  on(AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    messages: error,
  })),
  on(AuthActions.resetMessages, (state) => ({ ...state, messages: [] })),
  on(AuthActions.logout, (state) => ({...state, token: null, isLoggedIn: false, message: []}))
);
