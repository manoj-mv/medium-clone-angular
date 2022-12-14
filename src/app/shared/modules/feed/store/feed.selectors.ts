import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FeedState } from "../types/feed-state.interface";
import { feedFeatureKey } from "./feed.reducer";


export const selectFeed = createFeatureSelector<FeedState>(feedFeatureKey);

export const isLoadingSelector = createSelector(
    selectFeed,
    (feedState: FeedState) => {
        return feedState.isLoading;
    }
);

export const errorSelector = createSelector(
    selectFeed,
    (feedState: FeedState) => {
        return feedState.error;
    }
)

export const feedSelector = createSelector(
    selectFeed,
    (feedState: FeedState) => feedState.data
);




