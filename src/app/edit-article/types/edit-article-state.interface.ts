import { BackendErrorInterface } from "src/app/auth/types/backen-errors.interface";
import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface EditArticleStateInterface {
  isLoading: boolean;
  isSubmitting: boolean;
  validationErrors: BackendErrorInterface | null,
  article: ArticleInterface | null;
}
