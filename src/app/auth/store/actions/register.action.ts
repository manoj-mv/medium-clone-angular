import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { AuthActionTypes } from "../action-types";
import { currentUserInterface } from "src/app/types/currentuser.interface";
import { BackendErrorInterface } from "../../types/backen-errors.interface";

export const register = createAction(
  AuthActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);

export const registerSuccess = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: currentUserInterface }>()
);

export const registerFailure = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
