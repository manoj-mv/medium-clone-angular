import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { currentUserInterface } from "src/app/sahred/types/currentuser.interface";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { AuthService } from "../../services/auth.service";
import * as AuthActions from "../actions/login.action";


@Injectable()
export class LoginEffects {
    login$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(
                action => this.authService.login(action.payload).pipe(
                    map((currentUser: currentUserInterface) => {
                        this.persistanceService.set('accessToken', currentUser.token);
                        return AuthActions.loginSuccess({ currentUser: currentUser });
                    }),
                    catchError((err: HttpErrorResponse) => of(AuthActions.loginFail({ errors: err.error.errors })))
                )
            )
        )
    );

    redirectAfterLogin$ = createEffect(
        () => this.actions$.pipe(
            ofType(AuthActions.loginSuccess),
            tap(
                () => {
                    this.router.navigate(['/']);
                }
            )
        )
    )



    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService,
        private router: Router) { }
}
