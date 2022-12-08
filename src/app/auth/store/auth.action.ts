import { createAction, props } from "@ngrx/store";
import { AuthActionTypes } from "./action-types";

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{ username: string, email: string, password: string }>()
);
