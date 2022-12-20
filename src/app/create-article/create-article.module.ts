import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { StoreModule } from '@ngrx/store';
import { CreateArticleFeatureKey, createArticleReducer } from './store/create-article.reducer';

const routes: Routes = [
  {
    path: '', component: CreateArticleComponent
  }
]

@NgModule({
  declarations: [
    CreateArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature(CreateArticleFeatureKey, createArticleReducer),

    ArticleFormModule
  ]
})
export class CreateArticleModule { }
