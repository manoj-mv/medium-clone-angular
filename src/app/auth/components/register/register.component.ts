import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { register } from '../../store/actions/register.action';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/auth.selectors';
import { BackendErrorInterface } from '../../types/backen-errors.interface';
import { RegisterRequestInterface } from '../../types/register-request.interface';

@Component({
  selector: 'mdc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  validationErros$: Observable<BackendErrorInterface | null>;

  constructor(private fb: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.initForm();
    this.initializeValues();
  }

  initForm(): void {
    this.authForm = this.fb.group({
      username: ['', Validators.required],
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
    const request: RegisterRequestInterface = {
      user: this.authForm.value
    }
    this.store.dispatch(register(request));
  }
}
