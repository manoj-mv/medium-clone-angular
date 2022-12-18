import { PopularTagType } from "./popular-tag.type";
import { ProfileInterface } from "./profile.interface";

export interface ArticleInterface {
  "id": string;
  "slug": string;
  "title": string;
  "body": string;
  "description": string;
  "favoritesCount": number;
  "createdAt": string;
  "updatedAt": string;
  "favorited": boolean;
  "author": ProfileInterface,
  "tagList": PopularTagType[];
}
