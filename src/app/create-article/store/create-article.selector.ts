import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CreateArticleState } from "../types/create-article-state.interface";
import { CreateArticleFeatureKey } from "./create-article.reducer";


export const createArticleFeatureSelector = createFeatureSelector<CreateArticleState>(CreateArticleFeatureKey);


export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState => createArticleState.isSubmitting)
);

export const validationErrorSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState => createArticleState.validationErrors)
);
