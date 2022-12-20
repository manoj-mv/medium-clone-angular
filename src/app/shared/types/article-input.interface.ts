import { PopularTagType } from "./popular-tag.type";

export interface ArticleInputInterface {
  title: string;
  description: string;
  body: string;
  tagList: PopularTagType[]
}
