import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './components/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffects } from './store/effects/get-feed.effect';
import { StoreModule } from '@ngrx/store';
import { feedFeatureKey, feedReducer } from './store/feed.reducer';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from '../error-messages/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PaginationModule } from '../pagination/pagination.module';
import { TagListModule } from '../tag-list/tag-list.module';
import { FavoritesModule } from '../favorites/favorites.module';


@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GetFeedEffects]),
    StoreModule.forFeature(feedFeatureKey, feedReducer),

    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    FavoritesModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
