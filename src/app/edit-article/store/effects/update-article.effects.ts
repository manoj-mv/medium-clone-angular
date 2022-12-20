import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UpdateArticleActions from "../actions/edit-article.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { EditArticleService } from "../../services/edit-article.service";

@Injectable()
export class UpdateArticleEffect {

  createArticle$ = createEffect(
    () => this.action$.pipe(
      ofType(UpdateArticleActions.updateArticle),
      switchMap(
        ({ slug, articleInput }) => {
          return this.editArticleService.updateArtice(slug, articleInput).pipe(
            map((article) => UpdateArticleActions.updateArticleSuccess({ article })),
            catchError((errorRes: HttpErrorResponse) => of(UpdateArticleActions.updateArticleFailure({ errors: errorRes.error.errors })))
          )
        }
      )
    )
  );

  redirectAfterUpdateArticle$ = createEffect(
    () => this.action$.pipe(
      ofType(UpdateArticleActions.updateArticleSuccess),
      tap(
        ({ article }) => {
          this.router.navigate(['/articles/', article.slug])
        }
      )
    ), { dispatch: false }
  )

  constructor(
    private action$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) { }
}
