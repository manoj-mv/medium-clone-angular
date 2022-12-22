import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, UrlSerializer } from '@angular/router';
import { Store } from '@ngrx/store';
import queryString from 'query-string';
import { Observable, Subscription } from 'rxjs';

import { environment } from 'src/environments/environment';
import { getFeed } from '../../store/actions/get-feed.action';
import * as FeedSelectors from '../../store/feed.selectors';
import { feedResponseInterface } from '../../types/feed-response.interface';
import { isUserLogedInSelector } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'mdc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<feedResponseInterface | null>;
  defaultUserImage = 'assets/images/user.svg';
  limit = environment.limit;
  baseUrl: string;
  currentPage: number;
  queryParamSubscription: Subscription;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlInputChanged = !changes['apiUrlProps'].firstChange && (changes['apiUrlProps'].currentValue != changes['apiUrlProps'].previousValue);
    if (isApiUrlInputChanged) {
      this.fetchData();
    } else {

    }
  }

  fetchData(): void {
    if (this.apiUrlProps) {
      const offset = this.currentPage * this.limit - this.limit;
      const parsedUrl = queryString.parseUrl(this.apiUrlProps);
      const stringifiedParams = queryString.stringify({
        limit: this.limit,
        offset: offset,
        ...parsedUrl.query
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
      this.store.dispatch(getFeed({ url: apiUrlWithParams }));
    }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(FeedSelectors.isLoadingSelector);
    this.error$ = this.store.select(FeedSelectors.errorSelector);
    this.feed$ = this.store.select(FeedSelectors.feedSelector);
    this.baseUrl = this.router.url.split('?')[0];

    this.isLoggedIn$ = this.store.select(isUserLogedInSelector);
  }

  initializeListeners(): void {
    this.queryParamSubscription = this.route.queryParamMap.subscribe(
      (params: ParamMap) => {
        this.currentPage = Number(params.get('page')) || 1;
        this.fetchData();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.queryParamSubscription) {
      this.queryParamSubscription.unsubscribe();
    }
  }
}
