import { UserProfileInterface } from "./user-profile.interface";

export interface UserProfileStateInterface {
  isLoading: boolean;
  errors: string | null;
  userProfile: UserProfileInterface | null
}
