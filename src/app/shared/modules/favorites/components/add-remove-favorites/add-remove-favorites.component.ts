import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/app-state.interface';
import { addOrRemoveFavorite } from '../../store/actions/add-remove-favorite.action';

@Component({
  selector: 'mdc-add-remove-favorites',
  templateUrl: './add-remove-favorites.component.html',
  styleUrls: ['./add-remove-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedInput: boolean;
  @Input('articleSlug') articleSlugInput: string;
  @Input('favoritesCount') favoritesCountInput: number;
  favoritesCount: number;
  isFavorited: boolean;
  constructor(
    private store: Store<AppStateInterface>
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.favoritesCount = this.favoritesCountInput;
    this.isFavorited = this.isFavoritedInput;
  }

  handleLike(): void {
    // TODO: dispatch like or dislike
    this.store.dispatch(addOrRemoveFavorite({ isFavorited: this.isFavorited, slug: this.articleSlugInput }));
    this.isFavorited = !this.isFavorited;
    this.favoritesCount = this.isFavorited ? this.favoritesCount + 1 : this.favoritesCount - 1
  }

}
