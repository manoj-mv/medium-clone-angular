import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserProfileFeatureKey } from "./user-profile.reducer";
import { UserProfileStateInterface } from "../types/user-profile-state.interface";


export const userProfileFeatureSelector = createFeatureSelector<UserProfileStateInterface>(UserProfileFeatureKey);

export const userProfilrSelector = createSelector(
  userProfileFeatureSelector,
  state => state.userProfile
);

export const isLoadingSelector = createSelector(
  userProfileFeatureSelector,
  state => state.isLoading
);

export const errorSelector = createSelector(
  userProfileFeatureSelector,
  state => state.errors
)
