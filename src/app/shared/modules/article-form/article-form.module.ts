import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { BackendErrorModule } from '../backend-error/backend-errors.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    BackendErrorModule,
    ReactiveFormsModule
  ],
  exports: [
    ArticleFormComponent
  ]
})
export class ArticleFormModule { }
