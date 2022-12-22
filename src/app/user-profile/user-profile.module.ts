import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { UserProfileEffects } from './store/effects/user-profile.effect';
import { StoreModule } from '@ngrx/store';
import { UserProfileFeatureKey, userPofileReducer } from './store/user-profile.reducer';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: '', component: UserProfileComponent,

  },
  {
    path: 'favorites', component: UserProfileComponent
  }
]


@NgModule({
  declarations: [
    UserProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    EffectsModule.forFeature([UserProfileEffects]),
    StoreModule.forFeature(UserProfileFeatureKey, userPofileReducer),

    FeedTogglerModule,
    FeedModule
  ],
  providers: [
    UserProfileService
  ]
})
export class UserProfileModule { }
