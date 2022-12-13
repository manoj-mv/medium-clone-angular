import { createAction, props } from "@ngrx/store";
import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { BackendErrorInterface } from "../../types/backen-errors.interface";

import { AuthActionTypes } from "../action-types";

export const getCurrentUser = createAction(
    AuthActionTypes.GET_CURRENT_USER
);
export const getCurrentUserSuccess = createAction(
    AuthActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{ currentUser: currentUserInterface }>()
)

export const getCurrentUserFailure = createAction(
    AuthActionTypes.GET_CURRENT_USER_FAILURE
)
