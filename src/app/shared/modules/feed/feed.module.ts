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
    LoadingModule
  ],
  exports: [
    FeedComponent
  ]
})
export class FeedModule { }
