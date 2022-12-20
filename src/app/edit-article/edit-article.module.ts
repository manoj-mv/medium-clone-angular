import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { EditArticleFeatureKey, editArticleReducer } from './store/edit-article.reducer';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { UpdateArticleEffect } from './store/effects/update-article.effects';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes: Routes = [
  {
    path: '', component: EditArticleComponent
  }
]

@NgModule({
  declarations: [
    EditArticleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature(EditArticleFeatureKey, editArticleReducer),

    ArticleFormModule,
    LoadingModule
  ]
})

export class UpdateArticleModule { }
