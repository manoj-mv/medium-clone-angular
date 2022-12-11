import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../../store/actions/login.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/auth.selectors';
import { BackendErrorInterface } from '../../types/backen-errors.interface';
import { LoginRequestInterface } from '../../types/login.request.interface';

@Component({
  selector: 'mdc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  validationErros$: Observable<BackendErrorInterface | null>;

  constructor(private fb: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.email]
      ],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingSelector)
    );

    this.validationErros$ = this.store.select(validationErrorsSelector);
  }

  onSubmit() {
    console.log('submitted');
    const request: LoginRequestInterface = {
      user: this.loginForm.value
    }
    console.log(request);

    this.store.dispatch(login({ payload: request }));

  }

}
