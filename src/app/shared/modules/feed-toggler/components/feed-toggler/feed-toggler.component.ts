import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isUserLogedInSelector } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'mdc-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  @Input('tagName') tagNameInput: string;
  isLoggedIn$: Observable<boolean>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.isLoggedIn$ = this.store.select(isUserLogedInSelector);
  }

}
