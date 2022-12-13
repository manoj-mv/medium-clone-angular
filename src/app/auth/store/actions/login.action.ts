import { createAction, props } from "@ngrx/store";

import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { BackendErrorInterface } from "../../types/backen-errors.interface";
import { LoginRequestInterface } from "../../types/login.request.interface";
import { AuthActionTypes } from "../action-types";


export const login = createAction(
    AuthActionTypes.LOGIN,
    props<{ payload: LoginRequestInterface }>()
);

export const loginSuccess = createAction(
    AuthActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: currentUserInterface }>()
);

export const loginFail = createAction(
    AuthActionTypes.LOGIN_FAILURE,
    props<{ errors: BackendErrorInterface }>()
);
