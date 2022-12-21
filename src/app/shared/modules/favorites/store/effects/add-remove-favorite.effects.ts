import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as FavoriteActions from "../actions/add-remove-favorite.action";
import { catchError, map, of, switchMap } from "rxjs";
import { AddRemoveFavoriteService } from "../../services/add-remove-favorite.service";


@Injectable()
export class AddRemoveFavoriteEffecs {
  addToFavorite$ = createEffect(
    () => this.actions$.pipe(
      ofType(FavoriteActions.addOrRemoveFavorite),
      switchMap(({ isFavorited, slug }) => {
        const article$ = !isFavorited ?
          this.favoriteService.addToFavorites(slug) :
          this.favoriteService.removeFromFavorites(slug);
        return article$.pipe(
          map(article => {
            return FavoriteActions.addOrRemoveFavoriteSuccess({ article });
          }),
          catchError(err => {
            return of(FavoriteActions.addOrRemoveFavoriteFailure())
          })
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private favoriteService: AddRemoveFavoriteService
  ) { }
}
