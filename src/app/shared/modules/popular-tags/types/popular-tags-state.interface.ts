import { PopularTagType } from "src/app/shared/types/popular-tag.type";

export interface PopularTagsStateInterface {
  isLoading: boolean;
  popularTags: PopularTagType[] | null;
  error: string | null
}
