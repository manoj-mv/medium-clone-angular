import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToFavoritesComponent } from './components/add-remove-favorites/add-remove-favorites.component';
import { EffectsModule } from '@ngrx/effects';
import { AddRemoveFavoriteEffecs } from './store/effects/add-remove-favorite.effects';



@NgModule({
  declarations: [
    AddToFavoritesComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AddRemoveFavoriteEffecs])
  ],
  exports: [
    AddToFavoritesComponent
  ]
})
export class FavoritesModule { }
