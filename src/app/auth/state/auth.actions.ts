import { createAction, props } from "@ngrx/store";
import { ResponseMessage } from "src/app/models/response.model";
import { UserProfile } from "src/app/models/userProfile.model";
import { LoginBodyObject, RegisterBodyObject } from "src/app/services/auth.service";

export const loadAuthTokenFromLocalStorage = createAction(
    '[Local Storage] Load Auth Token From LocalStorage'
);

export const loadAuthTokenFromLocalStorageSuccess = createAction(
    '[Local Storage] Load Auth Token From LocalStorage Success',
    props<{token: string}>()
);

export const localStorageEmpty = createAction(
    '[Local Storage] Auth Token From Local Storage Is Empty'
)

export const login = createAction(
    '[Login / Backend API] Login',
    props<{body: LoginBodyObject}>()
);

export const loginSuccess = createAction(
    '[Login / LocalStorage] Login Success',
    props<{token: string}>()
);

export const loginFailure = createAction(
    '[Login] Login Failure',
    props<{error: ResponseMessage[]}>()
);

export const register = createAction(
    '[Register / Backend API] Register',
    props<{body: RegisterBodyObject}>()
);

export const registerSuccess = createAction(
    '[Register] Register Success',
    props<{msg: ResponseMessage[]}>()
);

export const registerFailure = createAction(
    '[Register] Register Failure',
    props<{error: ResponseMessage[]}>()
);

export const resetMessages = createAction(
    '[Login] Reset Messages'
);

export const logout = createAction(
    '[Logout] Logout'
);

// trigger when login success or load token from localStorage success
export const loadUserProfileSuccess = createAction(
    '[Backend API] Load User Profile Success',
    props<{userProfile: UserProfile}>()
);

export const loadUserProfileFailure = createAction(
    '[Backend API] Load User Profile Failure',
    props<{error: ResponseMessage[]}>()
);

export const setCurrentAction = createAction(
    '[Check Out / Fav Products] Set Current Action',
    props<{currentActionUrl: string, messages: ResponseMessage[]}>()
)