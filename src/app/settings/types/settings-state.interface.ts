import { BackendErrorInterface } from "src/app/auth/types/backen-errors.interface";

export interface SettingsState {
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null;
}
