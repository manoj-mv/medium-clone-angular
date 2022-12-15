import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { fetchPopularTags } from "../../store/actions/popular-tags.action";
import * as PopularTagsSelectors from "../../store/popular-tags.selector";

@Component({
  selector: 'mdc-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  constructor(
    private store: Store
  ) { }

  fetchData(): void {
    this.store.dispatch(fetchPopularTags());
  }

  initializeValues(): void {
    this.isLoading$ = this.store.select(PopularTagsSelectors.isLoadingSelector);
    this.popularTags$ = this.store.select(PopularTagsSelectors.popularTagsSelector);
  }
}
