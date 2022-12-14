import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeed } from '../../store/actions/get-feed.action';
import * as FeedSelectors from '../../store/feed.selectors';
import { feedResponseInterface } from '../../types/feed-response.interface';

@Component({
  selector: 'mdc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<feedResponseInterface | null>;
  defaultUserImage = 'assets/images/user.svg';
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  fetchData(): void {
    if (this.apiUrlProps) {
      this.store.dispatch(getFeed({ url: this.apiUrlProps }));
    }
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(FeedSelectors.isLoadingSelector);
    this.error$ = this.store.select(FeedSelectors.errorSelector);
    this.feed$ = this.store.select(FeedSelectors.feedSelector);
  }

}
