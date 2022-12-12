import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../types/auth-state.interface";

import { authFeatureKey } from "./auth.reducer";

export const selectAuth = createFeatureSelector<AuthState>(authFeatureKey);

export const isSubmittingSelector = createSelector(selectAuth,
    (authState: AuthState) => {
        return authState.isSubmitting;
    }
);

export const validationErrorsSelector = createSelector(
    selectAuth,
    (authState: AuthState) => authState.validationErros
);

export const isUserLogedInSelector = createSelector(
    selectAuth,
    (authState: AuthState) => {
        return authState.isLoggedin;
    }
);

export const currentUserSelector = createSelector(
    selectAuth,
    (authState: AuthState) => {
        return authState.currentUser;
    }
);

export const isAnonymousUser = createSelector(
    selectAuth,
    (authState: AuthState) => {
        return (authState.isLoggedin === false);
    }
)
