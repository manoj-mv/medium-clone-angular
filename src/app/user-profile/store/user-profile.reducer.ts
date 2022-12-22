import { createReducer, on } from "@ngrx/store"
import { UserProfileStateInterface } from "../types/user-profile-state.interface"
import * as GetUserProfileActions from "./actions/user-profile.action"
import { routerNavigationAction } from "@ngrx/router-store"
import { state } from "@angular/animations"


const initialState: UserProfileStateInterface = {
  isLoading: false,
  errors: null,
  userProfile: null
}

export const UserProfileFeatureKey = 'user-profile';

export const userPofileReducer = createReducer(
  initialState,
  on(GetUserProfileActions.getUserProfile,
    (state) => ({
      ...state,
      isLoading: true
    })
  ),
  on(GetUserProfileActions.getUserProfileSuccess,
    (state, action) => ({
      ...state,
      isLoading: false,
      userProfile: action.userProfile
    })
  ),
  on(GetUserProfileActions.getUserProfileFailure,
    (state) => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (state) => ({
    ...state,
    // userPofile: null
  })
  )
)
