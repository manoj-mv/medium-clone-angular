import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'mdc-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit, OnDestroy {
  apiUrl = '/articles';
  tagName: string;
  routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeListeners()
  }

  initializeListeners(): void {
    this.routeSubscription = this.route.paramMap.subscribe(
      paramMap => {
        this.tagName = paramMap.get('slug');
      }
    )
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

}
