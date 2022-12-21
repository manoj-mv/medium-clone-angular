import { createAction } from "@ngrx/store";
import { AuthActionTypes } from "../action-types";


export const logout = createAction(
  AuthActionTypes.LOG_OUT
)
