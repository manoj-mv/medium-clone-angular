import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map } from 'rxjs';

import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import * as ArticleSelectors from '../../store/article.selector';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { fetchArticle } from '../../store/actions/article.actions';
import { currentUserSelector } from 'src/app/auth/store/auth.selectors';
import { deleteArticle } from '../../store/actions/delete-article.action';

@Component({
  selector: 'mdc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article$: Observable<ArticleInterface | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  slug: string;
  isAuthor$: Observable<boolean>;
  defaultImage = 'assets/images/user.svg';

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.initializeData();
  }

  fetchData(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.store.dispatch(fetchArticle({ slug: this.slug }));
  }

  initializeData(): void {
    this.article$ = this.store.select(ArticleSelectors.articleSelector);
    this.isLoading$ = this.store.select(ArticleSelectors.isLoadingSelector);
    this.error$ = this.store.select(ArticleSelectors.errorSelector);
    this.isAuthor$ = combineLatest(
      [this.article$, this.store.select(currentUserSelector)]).pipe(
        map(([article, currentUser]) => {
          console.log(article, currentUser);
          if (!article && !currentUser) return false;
          return article.author.username === currentUser.username;
        })
      );
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticle({ slug: this.slug }));
  }

}
