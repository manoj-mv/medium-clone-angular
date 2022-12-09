import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../types/auth-state.interface";
import * as  AuthActions from "src/app/auth/store/auth.action";

const initialState: AuthState = {
    isSubmitting: false,
}

export const authFeatureKey = "auth";
export const authReducer = createReducer(
    initialState,
    on(AuthActions.register, (state, action): AuthState => {
        return {
            ...state,
            isSubmitting: true
        }
    }),
);
