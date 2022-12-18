import { createAction, props } from "@ngrx/store";
import { ArticleActionTypes } from "../article-action-types";
import { ArticleInterface } from "src/app/shared/types/article.interface";


export const fetchArticle = createAction(
  ArticleActionTypes.FETCH_ARTICLE,
  props<{ slug: string }>()
);

export const fetchArticleSuccess = createAction(
  ArticleActionTypes.FETCH_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const fetchArticleFailure = createAction(
  ArticleActionTypes.FETCH_ARTICLE_FAILURE,
);

