import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, filter, map, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import * as UserProfileSelectors from '../../store/user-profile.selector';
import { UserProfileInterface } from '../../types/user-profile.interface';
import { getUserProfile } from '../../store/actions/user-profile.action';
import { currentUserSelector } from 'src/app/auth/store/auth.selectors';
import { currentUserInterface } from 'src/app/shared/types/currentuser.interface';

@Component({
  selector: 'mdc-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile$: Observable<UserProfileInterface>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  apiUrl: string;
  slug: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.userProfile$ = this.store.select(UserProfileSelectors.userProfilrSelector);
    this.isLoading$ = this.store.select(UserProfileSelectors.isLoadingSelector);
    this.error$ = this.store.select(UserProfileSelectors.errorSelector);



    this.isCurrentUserProfile$ = combineLatest(
      [this.userProfile$.pipe(filter(Boolean)),
      this.store.pipe(select(currentUserSelector), filter(Boolean))],
    ).pipe(
      map(([userProfile, currentUser]: [UserProfileInterface, currentUserInterface]) => {
        return (userProfile.username === currentUser.username)
      })
    )
  }


  initializeListeners(): void {
    this.route.paramMap.subscribe(
      paramMap => {
        this.slug = paramMap.get('slug');
        this.fetchUserProfile();
        this.apiUrl = `/articles?author=${this.slug}`;
      }
    );
  }

  fetchUserProfile(): void {
    this.store.dispatch(getUserProfile({ username: this.slug }));
  }

  getApiUrl(): string {
    const isFavoritesPathSegmentContainedInUrl = this.router.url.includes('favorites');
    return isFavoritesPathSegmentContainedInUrl ? `/articles?favorited=${this.slug}` : `/articles?author=${this.slug}`;

  }


}
