import { createReducer, on } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";
import * as PopularTagsActions from "./actions/popular-tags.action";



const initialState: PopularTagsStateInterface = {
  isLoading: false,
  popularTags: null,
  error: null
}

export const popularTagsFeatureKey = 'popular-tags';

export const populaTagsReducer = createReducer(
  initialState,
  on(PopularTagsActions.fetchPopularTags,
    (state, action) => {
      return {
        ...state,
        isLoading: true
      }
    }
  ),
  on(PopularTagsActions.fetchPopularTagsSuccess,
    (state, action) => {
      return {
        ...state,
        isLoading: false,
        popularTags: action.popularTags
      }
    }
  ),
  on(PopularTagsActions.fetchPopularTagsFailure,
    (state, action) => {
      return {
        ...state,
        isLoading: false
      }
    })
);
