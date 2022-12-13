import { createAction, props } from "@ngrx/store";
import { feedResponseInterface } from "../../types/feed-response.interface";
import { FeedActionTypes } from "../feed-action-types";

export const getFeed = createAction(
    FeedActionTypes.GET_FEED,
    props<{ url: string }>()
);

export const getFeedSuccess = createAction(
    FeedActionTypes.GET_FEED_SUCCESS,
    props<{ feed: feedResponseInterface }>()
);

export const getFeedFailure = createAction(
    FeedActionTypes.GET_FEED_FAILURE
);
