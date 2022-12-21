import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { authFeatureKey, authReducer } from './store/auth.reducer';
import { RegisterComponent } from './components/register/register.component';
import { AuthRoutingModule } from './auth.routing.module';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffects } from './store/effects/register.effects';
import { BackendErrorModule } from '../shared/modules/backend-error/backend-errors.module';
import { LoginEffects } from './store/effects/login.effects';
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffects } from './store/effects/get-current-user.effect';
import { UpdateCurrentUserEffects } from './store/effects/update-current-user.effect';
import { LogoutEffect } from './store/effects/logout.effect';



@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature(
      [
        RegisterEffects,
        LoginEffects,
        GetCurrentUserEffects,
        UpdateCurrentUserEffects,
        LogoutEffect
      ]
    ),
    BackendErrorModule
  ]
})
export class AuthModule { }
