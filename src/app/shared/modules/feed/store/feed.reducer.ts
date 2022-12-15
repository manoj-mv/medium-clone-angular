import { routerNavigationAction } from "@ngrx/router-store";
import { createReducer, on } from "@ngrx/store";
import { FeedState } from "../types/feed-state.interface";
import * as GetFeedActions from './actions/get-feed.action';

const initialState: FeedState = {
    isLoading: false,
    error: null,
    data: null
}

export const feedFeatureKey = 'feed';

export const feedReducer = createReducer(
    initialState,
    on(
        GetFeedActions.getFeed,
        (state, action) => {
            return {
                ...state,
                isLoading: true
            }
        }
    ),
    on(
        GetFeedActions.getFeedSuccess,
        (state, action) => {
            return {
                ...state,
                isLoading: false,
                data: action.feed,
                error: null
            }
        }
    ),
    on(
        GetFeedActions.getFeedFailure,
        (state, action) => {
            return {
                ...state,
                isLoading: false
            }
        }
    ),
    on(routerNavigationAction,
        (): FeedState => initialState)
);
