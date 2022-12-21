import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import * as UpdateCurrentUserActions from "../actions/update-current-user.action";


@Injectable()
export class UpdateCurrentUserEffects {
  updateCurrentUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateCurrentUserActions.updateCurrentUser),
      switchMap(
        ({ user }) => this.authService.updatecurrentUser(user).pipe(
          map((currentUser: currentUserInterface) => {
            return UpdateCurrentUserActions.updateCurrentUserSuccess({ currentUser });
          }),
          catchError((err: HttpErrorResponse) => of(UpdateCurrentUserActions.updateCurrentUserFailure({ errors: err.error.errors })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }
}
