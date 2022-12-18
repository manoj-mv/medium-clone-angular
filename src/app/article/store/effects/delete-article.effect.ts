import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as DeleteArticleActions from "../actions/delete-article.action";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { ArticleModuleScopeService } from "../../services/article-module-scope.service";
import { Router } from "@angular/router";


@Injectable()
export class DeleteArticleEffects {
  deleteEffect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DeleteArticleActions.deleteArticle),
        switchMap(({ slug }) => {
          return this.articleModuleScopeService.deleteArticle(slug).pipe(
            map(() => {
              return DeleteArticleActions.deleteArticleSuccess();
            }),
            catchError(
              () => of(DeleteArticleActions.deleteArticleFailure())
            )
          )
        })
      )
    }
  )

  redirectAfterDelete$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteArticleActions.deleteArticleSuccess),
      tap(
        () => {
          this.router.navigate(['/']);
        }
      )
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private articleModuleScopeService: ArticleModuleScopeService,
    private router: Router
  ) { }
}
