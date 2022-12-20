import { createAction, props } from "@ngrx/store";
import { BackendErrorInterface } from "src/app/auth/types/backen-errors.interface";
import { ArticleInputInterface } from "src/app/shared/types/article-input.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";
import { CreateArticleActionTypes } from '../edit-article-action-types';

export const updateArticle = createAction(
  CreateArticleActionTypes.UPDATE_ARTICLE,
  props<{ slug: string, articleInput: ArticleInputInterface }>()
);


export const updateArticleSuccess = createAction(
  CreateArticleActionTypes.UPDATE_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);


export const updateArticleFailure = createAction(
  CreateArticleActionTypes.UPDATE_ARTICLE_FAILURE,
  props<{ errors: BackendErrorInterface }>()
);
