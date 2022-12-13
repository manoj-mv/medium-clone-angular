import { ArticleInterface } from "src/app/shared/types/article.interface";

export interface feedResponseInterface {
    articles: ArticleInterface[];
    articlesCount: number;
}
