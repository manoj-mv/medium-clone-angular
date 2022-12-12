import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { currentUserSelector, isAnonymousUser, isUserLogedInSelector } from 'src/app/auth/store/auth.selectors';
import { currentUserInterface } from 'src/app/types/currentuser.interface';

@Component({
  selector: 'mdc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  isLoggedin$: Observable<boolean | null> = null;
  currentUser$: Observable<currentUserInterface | null>;
  isAnonymousUser$: Observable<boolean>;
  defaultImage = 'assets/images/user.svg';

  ngOnInit(): void {
    console.log('test');

    this.initializeValues();
  }

  initializeValues() {
    this.isLoggedin$ = this.store.select(isUserLogedInSelector);
    this.currentUser$ = this.store.select(currentUserSelector);
    this.isAnonymousUser$ = this.store.select(isAnonymousUser);
  }

  constructor(
    private store: Store
  ) {
    console.log('constructor');

  }
}
