import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { FeedService } from "../../services/feed.service";
import { feedResponseInterface } from "../../types/feed-response.interface";
import * as GetFeedActions from '../actions/get-feed.action';

@Injectable()
export class GetFeedEffects {

    getFeed$ = createEffect(
        () => this.actions$.pipe(
            ofType(GetFeedActions.getFeed),
            switchMap((action) => {
                return this.feedService.getFeed(action.url).pipe(
                    map((feed: feedResponseInterface) => {
                        return GetFeedActions.getFeedSuccess({ feed: feed });
                    }),
                    catchError((error: HttpErrorResponse) => {
                        console.log(error);
                        return of(GetFeedActions.getFeedFailure());
                    })
                )
            })
        )
    );

    constructor(
        private actions$: Actions,
        private feedService: FeedService
    ) { }
}
