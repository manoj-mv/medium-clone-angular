import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface ArticleState {
  isLoading: boolean;
  data: ArticleInterface | null;
  error: string | null;
}
