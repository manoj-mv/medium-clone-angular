import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsFeatureKey } from "./settings.reducer";
import { SettingsState } from "../types/settings-state.interface";


export const setttingsFeatureSelector = createFeatureSelector<SettingsState>(SettingsFeatureKey);

export const isSubmittingSelector = createSelector(
  setttingsFeatureSelector,
  (state) => state.isSubmitting
);

export const validationErrorsSelector = createSelector(
  setttingsFeatureSelector,
  (state) => state.validationErrors
);
