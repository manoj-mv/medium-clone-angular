import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { Injectable } from "@angular/core";

import * as  GetArticleActions from '../actions/get-article.actions'
import { ArticleService as sharedArticleService } from "src/app/shared/services/article.service";

@Injectable()
export class GetArticleEffect {

  getArticle$ = createEffect(
    () => this.action$.pipe(
      ofType(GetArticleActions.getArticle),
      switchMap(
        ({ slug }) => {
          return this.sharedArticleService.getArticle(slug).pipe(
            map((article) => GetArticleActions.getArticleSuccess({ article })),
            catchError(() => of(GetArticleActions.getArticleFailure()))
          )
        }
      )
    )
  );

  constructor(
    private action$: Actions,
    private sharedArticleService: sharedArticleService,
  ) { }
}
