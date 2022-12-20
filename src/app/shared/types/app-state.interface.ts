import { authFeatureKey } from "src/app/auth/store/auth.reducer";
import { AuthState } from "src/app/auth/types/auth-state.interface";
import { feedFeatureKey } from "../modules/feed/store/feed.reducer";
import { FeedState } from "../modules/feed/types/feed-state.interface";
import { popularTagsFeatureKey } from "../modules/popular-tags/store/popular-tags.reducer";
import { PopularTagsStateInterface } from "../modules/popular-tags/types/popular-tags-state.interface";
import { articleFeatureKey } from "src/app/article/store/article.reducer";
import { ArticleState } from "src/app/article/types/aritcle-state.interface";
import { CreateArticleFeatureKey } from "src/app/create-article/store/create-article.reducer";
import { CreateArticleState } from "src/app/create-article/types/create-article-state.interface";

export interface AppStateInterface {
  [authFeatureKey]: AuthState;
  [feedFeatureKey]: FeedState;
  [popularTagsFeatureKey]: PopularTagsStateInterface;
  [articleFeatureKey]: ArticleState;
  [CreateArticleFeatureKey]: CreateArticleState
}
