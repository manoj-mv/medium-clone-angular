import { createReducer, on } from "@ngrx/store";
import { CreateArticleState } from "../types/create-article-state.interface";
import * as CreateArticleActions from "./actions/create-article.action";


const initialState: CreateArticleState = {
  isSubmitting: false,
  validationErrors: null
}

export const CreateArticleFeatureKey = 'create-article';
export const createArticleReducer = createReducer(
  initialState,
  on(CreateArticleActions.createArticle,
    (state) => {
      return {
        ...state,
        isSubmitting: true
      }
    }
  ),
  on(
    CreateArticleActions.createArticleSuccess,
    (state) => {
      return {
        ...state,
        isSubmitting: false
      }
    }
  ),
  on(
    CreateArticleActions.createArticleFailure,
    (state, action) => {
      return {
        ...state,
        isSubmitting: false,
        validationErrors: action.errors
      }
    }
  )
)
