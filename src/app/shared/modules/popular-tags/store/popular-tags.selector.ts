import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PopularTagsStateInterface } from "../types/popular-tags-state.interface";
import { popularTagsFeatureKey } from "./popular-tags.reducer";


export const popularTagsSelect = createFeatureSelector<PopularTagsStateInterface>(popularTagsFeatureKey);

export const isLoadingSelector = createSelector(
  popularTagsSelect,
  (popularTagsState => {
    return popularTagsState.isLoading;
  })
);

export const popularTagsSelector = createSelector(
  popularTagsSelect,
  (popularTagstate) => popularTagstate.popularTags
);
