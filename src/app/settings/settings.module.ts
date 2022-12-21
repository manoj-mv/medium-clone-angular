import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { StoreModule } from '@ngrx/store';
import { SettingsFeatureKey, settingsReducer } from './store/settings.reducer';
import { BackendErrorModule } from '../shared/modules/backend-error/backend-errors.module';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: SettingsComponent
  }
]

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(SettingsFeatureKey, settingsReducer),
    ReactiveFormsModule,

    BackendErrorModule
  ]
})
export class SettingsModule { }
