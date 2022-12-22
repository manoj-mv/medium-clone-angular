import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as GetUserProfileActions from "../actions/user-profile.action";
import { catchError, map, of, switchMap } from "rxjs";
import { UserProfileService } from "../../services/user-profile.service";

@Injectable()
export class UserProfileEffects {
  constructor(
    private action$: Actions,
    private userProfileService: UserProfileService
  ) { }

  fetchUserProfile$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(GetUserProfileActions.getUserProfile),
        switchMap(({ username }) => {
          return this.userProfileService.getUserProfile(username).pipe(
            map(
              (userProfile) => {
                return GetUserProfileActions.getUserProfileSuccess({ userProfile });
              }
            ),
            catchError(error => of(GetUserProfileActions.getUserProfileFailure()))
          )
        })
      )
    }
  )

}
