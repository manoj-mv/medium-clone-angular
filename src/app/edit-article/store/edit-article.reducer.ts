import { createReducer, on } from "@ngrx/store";
import * as EditArticleActions from "./actions/edit-article.action";
import * as GetArticleActions from "./actions/get-article.actions";
import { EditArticleStateInterface } from "../types/edit-article-state.interface";
import { routerNavigatedAction } from "@ngrx/router-store";


const initialState: EditArticleStateInterface = {
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
  article: null
}

export const EditArticleFeatureKey = 'edit-article';
export const editArticleReducer = createReducer(
  initialState,
  on(EditArticleActions.updateArticle,
    (state) => {
      return {
        ...state,
        isSubmitting: true
      }
    }
  ),
  on(
    EditArticleActions.updateArticleSuccess,
    (state) => {
      return {
        ...state,
        isSubmitting: false
      }
    }
  ),
  on(
    EditArticleActions.updateArticleFailure,
    (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
      }
    }
  ),

  on(GetArticleActions.getArticle,
    (state) => {
      return {
        ...state,
        isLoading: true
      }
    }
  ),
  on(
    GetArticleActions.getArticleSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        article: action.article
      }
    }
  ),
  on(
    GetArticleActions.getArticleFailure,
    (state) => {
      return {
        ...state,
        isLoading: false,
      }
    }
  ),
  on(routerNavigatedAction, (state) => initialState)
)
