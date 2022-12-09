import { createAction, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/register-request.interface";
import { AuthActionTypes } from "./action-types";

export const register = createAction(
  AuthActionTypes.REGISTER,
  props<{ payload: RegisterRequestInterface }>()
);
