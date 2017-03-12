import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedsService } from '../feeds/feeds.service';
import { FeedsComponent } from './feeds.component';
import { IFeed } from '../feeds/IFeed';
import { Subscription } from 'rxjs';
let template = require('./feedsList.template.html');
let styles = require('./feedsList.scss');

@Component({
  selector: 'feeds-list',
  template: template,
  styles: ['' + styles]
})

export class FeedsListComponent implements OnInit, OnDestroy {
  public feeds: IFeed[];
  private feedsSubscription: Subscription;
  constructor(private feedsService: FeedsService) {
  }
  public ngOnInit() {
    this.feedsSubscription = this.feedsService.getFeeds().subscribe((response: IFeed[]) => {
      this.feeds = response;
    });
  }
  public ngOnDestroy() {
    this.feedsSubscription.unsubscribe();
  }
}