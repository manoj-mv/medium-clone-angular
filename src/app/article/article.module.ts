import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/effects/article.effect';
import { StoreModule } from '@ngrx/store';
import { articleFeatureKey, articleReducer } from './store/article.reducer';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/error-messages/error-message.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { ArticleModuleScopeService } from './services/article-module-scope.service';
import { DeleteArticleEffects } from './store/effects/delete-article.effect';

const routes: Routes = [
  {
    path: '', component: ArticleComponent, pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    ArticleComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([ArticleEffects, DeleteArticleEffects]),
    StoreModule.forFeature(articleFeatureKey, articleReducer),
    RouterModule.forChild(routes),

    LoadingModule,
    ErrorMessageModule,
    TagListModule
  ],
  providers: [ArticleModuleScopeService]
})
export class ArticleModule { }
