import { createAction, props } from "@ngrx/store";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { PopularTagActionTypes } from "../popular-tags-action-types";


export const fetchPopularTags = createAction(
  PopularTagActionTypes.POPULAR_TAGS_FETCH,
);

export const fetchPopularTagsSuccess = createAction(
  PopularTagActionTypes.POPULAR_TAGS_FETCH_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const fetchPopularTagsFailure = createAction(
  PopularTagActionTypes.POPULAR_TAGS_FETCH_FAILURE
)
