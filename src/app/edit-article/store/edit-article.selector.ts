import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EditArticleStateInterface } from "../types/edit-article-state.interface";
import { EditArticleFeatureKey } from "./edit-article.reducer";


export const editArticleFeatureSelector = createFeatureSelector<EditArticleStateInterface>(EditArticleFeatureKey);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState => editArticleState.article)
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState => editArticleState.isLoading)
);

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState => editArticleState.isSubmitting)
);

export const validationErrorSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState => editArticleState.validationErrors)
);
