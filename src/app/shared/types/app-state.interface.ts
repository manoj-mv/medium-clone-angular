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
import { EditArticleFeatureKey } from "src/app/edit-article/store/edit-article.reducer";
import { EditArticleStateInterface } from "src/app/edit-article/types/edit-article-state.interface";
import { SettingsFeatureKey } from "src/app/settings/store/settings.reducer";
import { SettingsState } from "src/app/settings/types/settings-state.interface";
import { UserProfileFeatureKey } from "src/app/user-profile/store/user-profile.reducer";
import { UserProfileStateInterface } from "src/app/user-profile/types/user-profile-state.interface";

export interface AppStateInterface {
  [authFeatureKey]: AuthState;
  [feedFeatureKey]: FeedState;
  [popularTagsFeatureKey]: PopularTagsStateInterface;
  [articleFeatureKey]: ArticleState;
  [CreateArticleFeatureKey]: CreateArticleState;
  [EditArticleFeatureKey]: EditArticleStateInterface;
  [SettingsFeatureKey]: SettingsState,
  [UserProfileFeatureKey]: UserProfileStateInterface
}
