import { currentUserInterface } from "src/app/types/currentuser.interface";
import { BackendErrorInterface } from "./backen-errors.interface";

export interface AuthState {
    isSubmitting: boolean;
    currentUser: currentUserInterface | null;
    isLoggedin: boolean | null;
    validationErros: BackendErrorInterface | null;
}
