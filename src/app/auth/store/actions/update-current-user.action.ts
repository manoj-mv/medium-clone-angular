import { createAction, props } from "@ngrx/store";

import { AuthActionTypes } from "../action-types";
import { currentUserInputInterface } from "src/app/shared/types/current-user-input.interface";
import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { BackendErrorInterface } from "../../types/backen-errors.interface";

export const updateCurrentUser = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER,
  props<{ user: currentUserInputInterface }>()
);

export const updateCurrentUserSuccess = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_SUCCESS,
  props<{ currentUser: currentUserInterface }>()
);

export const updateCurrentUserFailure = createAction(
  AuthActionTypes.UPDATE_CURRENT_USER_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);

