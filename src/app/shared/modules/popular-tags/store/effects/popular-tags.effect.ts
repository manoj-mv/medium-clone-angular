import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PopularTagsService } from "../../services/popular-tags.service";
import * as PopularTagsActions from "../actions/popular-tags.action";

@Injectable()
export class PopularTagsEffect {
  fetchPopularTags$ = createEffect(
    () => this.actions$.pipe(
      ofType(PopularTagsActions.fetchPopularTags),
      switchMap(
        () => {
          return this.popularTagsService.getPopularTags().pipe(
            map(popularTags => {
              return PopularTagsActions.fetchPopularTagsSuccess({ popularTags: popularTags });
            }),
            catchError((error) => {
              console.log(error);
              return of(PopularTagsActions.fetchPopularTagsFailure());
            })
          )
        }
      )
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) { }
}
