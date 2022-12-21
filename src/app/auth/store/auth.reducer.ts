import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../types/auth-state.interface";
import * as  RegisterActions from "src/app/auth/store/actions/register.action";
import * as LoginActions from "./actions/login.action";
import * as GetCurrentUserActions from "./actions/get-current-user.action";
import { updateCurrentUserSuccess } from "./actions/update-current-user.action";
import { logout } from "./actions/synchronous.action";

const initialState: AuthState = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedin: null,
  validationErros: null
}

export const authFeatureKey = "auth";
export const authReducer = createReducer(
  initialState,
  on(RegisterActions.register, (state, action): AuthState => {
    return {
      ...state,
      isSubmitting: true,
      validationErros: null
    }
  }),
  on(RegisterActions.registerSuccess, (state, action) => {
    return {
      ...state,
      isSubmitting: false,
      isLoggedin: true,
      currentUser: action.currentUser,
    }
  }),
  on(RegisterActions.registerFailure,
    (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        validationErros: action.errors
      }
    }),
  on(LoginActions.login,
    (state, action) => {
      return {
        ...state,
        isSubmitting: true,
        validationErros: null
      }
    }),
  on(LoginActions.loginSuccess,
    (state, action) => {
      return {
        ...state,
        isLoggedin: true,
        isSubmitting: false,
        currentUser: action.currentUser
      }
    }
  ),
  on(LoginActions.loginFail,
    (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        validationErros: action.errors
      }
    }
  ),
  on(GetCurrentUserActions.getCurrentUser,
    (state, action) => {
      return {
        ...state,
        isLoading: true,
      }
    }
  ),
  on(GetCurrentUserActions.getCurrentUserSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        currentUser: action.currentUser,
        isLoggedin: true
      }
    }
  ),
  on(GetCurrentUserActions.getCurrentUserFailure,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        isLoggedin: false,
        currentUser: null
      }
    }
  ),
  on(updateCurrentUserSuccess,
    (state, action) => {
      return {
        ...state,
        currentUser: action.currentUser
      }
    }
  ),
  on(logout, state => {
    return {
      ...state,
      ...initialState,
      isLoggedin: false
    }
  })
);
