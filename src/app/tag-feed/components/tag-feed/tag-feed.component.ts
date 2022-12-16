import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mdc-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit, OnDestroy {
  tagName: string;
  apiUrl: string;
  routeParamSubscription: Subscription;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeParamSubscription = this.route.paramMap.subscribe(
      paramMAp =>
        this.tagName = paramMAp.get('slug')
    )
    this.apiUrl = `/articles?tag=${this.tagName}`;
  }

  ngOnDestroy(): void {
    if (this.routeParamSubscription) {
      this.routeParamSubscription.unsubscribe();
    }
  }

}
