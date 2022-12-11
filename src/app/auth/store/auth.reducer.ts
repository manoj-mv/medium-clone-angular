import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../types/auth-state.interface";
import * as  RegisterActions from "src/app/auth/store/actions/register.action";
import * as LoginActions from "./actions/login.action";

const initialState: AuthState = {
    isSubmitting: false,
    currentUser: null,
    isLoggedin: null,
    validationErros: null
}

export const authFeatureKey = "auth";
export const authReducer = createReducer(
    initialState,
    on(RegisterActions.register, (state, action): AuthState => {
        console.log('reached');

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
    )
);
