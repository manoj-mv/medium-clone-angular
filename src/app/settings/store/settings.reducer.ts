import { createReducer, on } from "@ngrx/store";
import { SettingsState } from "../types/settings-state.interface";
import * as  UpdateCurrentUserActions from "src/app/auth/store/actions/update-current-user.action";

const initialState: SettingsState = {
  isSubmitting: false,
  validationErrors: null
}


export const SettingsFeatureKey = 'settings';

export const settingsReducer = createReducer(
  initialState,
  on(
    UpdateCurrentUserActions.updateCurrentUser,
    (state) => {
      return {
        ...state,
        isSubmitting: true,
        validationErrors: null
      }
    }
  ),
  on(
    UpdateCurrentUserActions.updateCurrentUserSuccess,
    (state) => {
      return {
        ...state,
        isSubmitting: false,
      }
    }
  ),
  on(
    UpdateCurrentUserActions.updateCurrentUserFailure,
    (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
      }
    }
  ),
)
