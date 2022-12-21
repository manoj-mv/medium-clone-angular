import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BackendErrorInterface } from 'src/app/auth/types/backen-errors.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { isSubmittingSelector, validationErrorSelector } from '../../store/create-article.selector';
import { createArticle } from '../../store/actions/create-article.action';

@Component({
  selector: 'mdc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues: ArticleInputInterface = {
    title: '',
    description: '',
    body: '',
    tagList: []
  };

  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorInterface | null>
  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.validationErrors$ = this.store.select(validationErrorSelector);
  }

  onSubmit(articleFormData: any): void {
    const formData: ArticleInputInterface = {
      ...articleFormData,
      tagList: articleFormData.tagList.split(' ')
    }
    this.store.dispatch(createArticle({ article: formData }))
  }

}
