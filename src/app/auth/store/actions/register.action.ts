import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../../types/register-request.interface";
import { RegisterActionTypes } from "../action-types";
import { currentUserInterface } from "src/app/sahred/types/currentuser.interface";
import { BackendErrorInterface } from "../../types/backen-errors.interface";

export const register = createAction(
  RegisterActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);

export const registerSuccess = createAction(
  RegisterActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: currentUserInterface }>()
);

export const registerFailure = createAction(
  RegisterActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
