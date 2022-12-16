import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { BannerModule } from '../shared/modules/banner/banner.module';
import { PopularTagsModule } from '../shared/modules/popular-tags/popular-tags.module';
import { FeedTogglerModule } from '../shared/modules/feed-toggler/feed-toggler.module';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes: Routes = [
  {
    path: '', component: YourFeedComponent
  }
]


@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    FeedModule,
    BannerModule,
    PopularTagsModule,
    FeedTogglerModule
  ],
})
export class YourFeedModule { }
