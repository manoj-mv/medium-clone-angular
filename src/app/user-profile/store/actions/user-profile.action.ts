import { createAction, props } from "@ngrx/store";
import { UserProfileActiontypes } from "../user-profile-action-types";
import { UserProfileInterface } from "../../types/user-profile.interface";


export const getUserProfile = createAction(
  UserProfileActiontypes.GET_USER_PROFILE,
  props<{ username: string }>()
);

export const getUserProfileSuccess = createAction(
  UserProfileActiontypes.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: UserProfileInterface }>()
);

export const getUserProfileFailure = createAction(
  UserProfileActiontypes.GET_USER_PROFILE_FAILURE,
);
