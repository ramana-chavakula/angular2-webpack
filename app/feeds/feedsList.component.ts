import {Component, OnInit, OnDestroy} from '@angular/core';
import {FeedsService} from '../feeds/feeds.service.ts';
import {FeedsComponent} from './feeds.component.ts';
import {IFeed} from '../feeds/IFeed.ts';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {Subscription} from 'rxjs';
let template = require('./feedsList.template.html');
let styles = require('./feedsList.scss');

@Component({
    selector: 'FeedsList',
    template: template,
    styles: ['' + styles],
    directives: [FeedsComponent, ROUTER_DIRECTIVES]
    //providers: [FeedsService]
})

export class FeedsListComponent implements OnInit, OnDestroy {
  feeds: IFeed[];
  feedsSubscription: Subscription;
  constructor (private feedsService: FeedsService) {
  }
  ngOnInit () {
    this.feedsSubscription = this.feedsService.getFeeds().subscribe((response: IFeed[]) => {
      this.feeds = response;
    });
  }
  ngOnDestroy() {
    this.feedsSubscription.unsubscribe();
  }
}