import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";

import * as GetCurrentUserActions from "../actions/get-current-user.action";
@Injectable()
export class GetCurrentUserEffects {
    getCurrentUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(GetCurrentUserActions.getCurrentUser),
            switchMap(
                () => {
                    const token = this.persistanceService.get('accessToken');

                    if (!token) {
                        return of(GetCurrentUserActions.getCurrentUserFailure());
                    }

                    return this.authService.getCurrentUser().pipe(
                        map((currentUser: currentUserInterface) => {
                            return GetCurrentUserActions.getCurrentUserSuccess({ currentUser: currentUser })
                        }),
                        catchError((error: HttpErrorResponse) => {
                            return of(GetCurrentUserActions.getCurrentUserFailure());
                        }
                        )
                    )
                }

            )
        )
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService
    ) { }
}
