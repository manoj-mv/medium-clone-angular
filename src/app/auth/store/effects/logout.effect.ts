import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { logout } from "../actions/synchronous.action";
import { tap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logout),
      tap(
        () => {
          this.persistanceService.set('accessToken', '');
          this.router.navigate(['/']);
        }
      )
    ), { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }
}
