import { currentUserInterface } from "src/app/shared/types/currentuser.interface";
import { BackendErrorInterface } from "./backen-errors.interface";

export interface AuthState {
    isSubmitting: boolean;
    isLoading: boolean;
    currentUser: currentUserInterface | null;
    isLoggedin: boolean | null;
    validationErros: BackendErrorInterface | null;
}
