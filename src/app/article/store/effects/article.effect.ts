import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as GetArticleActions from "../actions/article.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ArticleService as sharedArticleService } from "src/app/shared/services/article.service";

@Injectable()
export class ArticleEffects {
  constructor(
    private action$: Actions,
    private sharedArticleService: sharedArticleService
  ) { }

  fetchArticle$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(GetArticleActions.fetchArticle),
        switchMap((action) => {
          return this.sharedArticleService.getArticle(action.slug).pipe(
            map(
              (articleData) => {
                return GetArticleActions.fetchArticleSuccess({ article: articleData });
              }
            ),
            catchError(error => of(GetArticleActions.fetchArticleFailure()))
          )
        })
      )
    }
  )

}
