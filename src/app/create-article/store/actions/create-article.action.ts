import { createAction, props } from "@ngrx/store";
import { BackendErrorInterface } from "src/app/auth/types/backen-errors.interface";
import { ArticleInputInterface } from "src/app/shared/types/article-input.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { CreateArticleActionTypes } from '../create-article-action-types';

export const createArticle = createAction(
  CreateArticleActionTypes.CREATE_ARTICLE,
  props<{ article: ArticleInputInterface }>()
);


export const createArticleSuccess = createAction(
  CreateArticleActionTypes.CREATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);


export const createArticleFailure = createAction(
  CreateArticleActionTypes.CREATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
