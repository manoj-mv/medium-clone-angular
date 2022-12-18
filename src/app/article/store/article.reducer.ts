import { createReducer, on } from "@ngrx/store";
import { ArticleState } from "../types/aritcle-state.interface";
import * as GetArticleActions from "./actions/article.actions";
import { state } from "@angular/animations";
import { routerNavigationAction } from "@ngrx/router-store";



const initialState: ArticleState = {
  isLoading: false,
  data: null,
  error: null
}

export const articleFeatureKey = 'article';

export const articleReducer = createReducer(
  initialState,
  on(GetArticleActions.fetchArticle,
    (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    }
  ),
  on(GetArticleActions.fetchArticleSuccess,
    (state, action) => {
      return {
        ...state,
        data: action.article,
        isLoading: false
      }
    }
  ),
  on(GetArticleActions.fetchArticleFailure,
    (state, action) => {
      return {
        ...state,
        isLoading: false
      }
    }
  ),
  on(routerNavigationAction, () => initialState)
)
