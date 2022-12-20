import { BackendErrorInterface } from "src/app/auth/types/backen-errors.interface";

export interface CreateArticleState {
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null,
}
