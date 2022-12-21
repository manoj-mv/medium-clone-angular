import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import * as CreateArticleActions from "../actions/create-article.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CreateArticleService } from "../../services/create-article.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class CreateArticleEffect {

  createArticle$ = createEffect(
    () => this.action$.pipe(
      ofType(CreateArticleActions.createArticle),
      switchMap(
        action => {
          return this.createArticleService.createArtice(action.article).pipe(
            map((article) => CreateArticleActions.createArticleSuccess({ article })),
            catchError((errorRes: HttpErrorResponse) => of(CreateArticleActions.createArticleFailure({ errors: errorRes.error.errors })))
          )
        }
      )
    )
  );

  redirectAfterCreateArticle$ = createEffect(
    () => this.action$.pipe(
      ofType(CreateArticleActions.createArticleSuccess),
      tap(
        ({ article }) => {
          this.router.navigate(['/articles/', article.slug])
        }
      )
    ), { dispatch: false }
  )

  constructor(
    private action$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) { }
}
