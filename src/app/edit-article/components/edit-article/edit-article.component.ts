import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';

import { BackendErrorInterface } from 'src/app/auth/types/backen-errors.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';
import { articleSelector, isLoadingSelector, isSubmittingSelector, validationErrorSelector } from '../../store/edit-article.selector';
import { updateArticle } from '../../store/actions/edit-article.action';
import { getArticle } from '../../store/actions/get-article.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mdc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface | null>;

  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<BackendErrorInterface | null>;
  isLoading$: Observable<boolean>;
  slug: string;
  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.validationErrors$ = this.store.select(validationErrorSelector);
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map(article => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList
        }
      })
    );
  }

  fetchData(): void {
    if (this.slug) {
      this.store.dispatch(getArticle({ slug: this.slug }));
    }
  }

  onSubmit(articleFormData: any): void {
    console.log(articleFormData);
    const formData: ArticleInputInterface = {
      ...articleFormData,
      tagList: articleFormData.tagList.split(' ')
    }
    this.store.dispatch(updateArticle({ slug: this.slug, articleInput: formData }))
  }

}
