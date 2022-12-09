import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { register } from '../../store/auth.action';
import { isSubmittingSelector } from '../../store/auth.selectors';

@Component({
  selector: 'mdc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup;
  isSubmitting$: Observable<boolean>;

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
  }

  onSubmit() {
    console.log('submitted', this, this.authForm.value);
    this.store.dispatch(register(this.authForm.value));
  }
}
