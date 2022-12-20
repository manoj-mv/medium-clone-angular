import { createAction, props } from '@ngrx/store';
import { CreateArticleActionTypes } from '../edit-article-action-types';
import { ArticleInterface } from 'src/app/shared/types/article.interface';

export const getArticle = createAction(
  CreateArticleActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleSuccess = createAction(
  CreateArticleActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleFailure = createAction(
  CreateArticleActionTypes.GET_ARTICLE_FAILURE,
);
