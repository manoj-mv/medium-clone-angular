import { createAction, props } from "@ngrx/store";
import { FavoriteActionTypes } from "../../types/favorites-action-types";
import { ArticleInterface } from "src/app/shared/types/article.interface";


export const addOrRemoveFavorite = createAction(
  FavoriteActionTypes.ADD_OR_REMOVE_FAVORITE,
  props<{ isFavorited: boolean, slug: string }>()
);
export const addOrRemoveFavoriteSuccess = createAction(
  FavoriteActionTypes.ADD_OR_REMOVE_FAVORITE_SUCCESS,
  props<{ article: ArticleInterface }>()
);
export const addOrRemoveFavoriteFailure = createAction(
  FavoriteActionTypes.ADD_OR_REMOVE_FAVORITE_FAILURE,
);
