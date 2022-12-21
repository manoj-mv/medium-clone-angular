import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription, filter } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/auth.selectors';
import { BackendErrorInterface } from 'src/app/auth/types/backen-errors.interface';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { currentUserInterface } from 'src/app/shared/types/currentuser.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/settings.selectors';
import { updateCurrentUser } from 'src/app/auth/store/actions/update-current-user.action';
import { currentUserInputInterface } from 'src/app/shared/types/current-user-input.interface';
import { logout } from 'src/app/auth/store/actions/synchronous.action';

@Component({
  selector: 'mdc-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUserSubscription$: Subscription;
  currentUser: currentUserInterface;
  isSubmitting$: Observable<boolean>;
  error$: Observable<BackendErrorInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.initializeListeners();
    this.initializeValues();
  }

  initializeListeners(): void {
    this.currentUserSubscription$ = this.store.select(currentUserSelector).pipe(
      filter(Boolean)
    ).subscribe(
      currentUser => {
        this.currentUser = currentUser;
        this.initializeForm();
      }
    );
  }

  initializeForm(): void {
    this.form = this.fb.group(
      {
        image: this.currentUser.image,
        username: this.currentUser.username,
        bio: this.currentUser.bio,
        email: this.currentUser.email,
        password: ''
      }
    )
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(validationErrorsSelector);
  }

  onSubmit(): void {
    const formData: currentUserInputInterface = this.form.value;
    this.store.dispatch(updateCurrentUser({ user: formData }));
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription$) {
      this.currentUserSubscription$.unsubscribe();
    }
  }
}
