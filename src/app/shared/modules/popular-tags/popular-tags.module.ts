import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoadingModule } from "../loading/loading.module";
import { PopularTagsComponent } from "./components/popular-tags/popular-tags.component";
import { PopularTagsEffect } from "./store/effects/popular-tags.effect";
import { popularTagsFeatureKey, populaTagsReducer } from "./store/popular-tags.reducer";


@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(popularTagsFeatureKey, populaTagsReducer),
    EffectsModule.forFeature([PopularTagsEffect]),
    RouterModule,

    LoadingModule
  ],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
