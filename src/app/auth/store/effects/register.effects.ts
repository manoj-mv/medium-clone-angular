import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import * as RegisterActions from '../actions/register.action';
import { AuthService } from 'src/app/auth/services/auth.service';
import { currentUserInterface } from "src/app/types/currentuser.interface";
import { PersistanceService } from "src/app/shared/services/persistance.service";
import { Router } from "@angular/router";

@Injectable()
export class RegisterEffects {
    registerUser$ = createEffect(
        () => this.actions$.pipe(
            ofType(RegisterActions.register),
            switchMap(action => {
                return this.authService.register(action).pipe(
                    map((currentUser: currentUserInterface) => {
                        this.persistenceService.set('accessToken', currentUser.token);
                        return RegisterActions.registerSuccess({ currentUser: currentUser });
                    }),
                    catchError((err) => of(RegisterActions.registerFailure({ errors: err.error.errors })))
                )
            })
        )
    );

    redirectAfterAuth$ = createEffect(
        () => this.actions$.pipe(
            ofType(RegisterActions.registerSuccess),
            tap(
                () => {
                    this.router.navigate(['/']);
                }
            )
        ),
        { dispatch: false }
    )

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistenceService: PersistanceService,
        private router: Router
    ) { }
}


