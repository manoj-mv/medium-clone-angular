import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ArticleState } from "../types/aritcle-state.interface"
import { articleFeatureKey } from "./article.reducer"


export const selectArticle = createFeatureSelector<ArticleState>(articleFeatureKey);

export const isLoadingSelector = createSelector(
  selectArticle,
  (articleState) => {
    return articleState.isLoading
  }
);

export const errorSelector = createSelector(
  selectArticle,
  (articleState) => {
    return articleState.error
  }
);

export const articleSelector = createSelector(
  selectArticle,
  (articleState) => {
    return articleState.data
  }
);


