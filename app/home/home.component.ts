import {Component, OnInit} from '@angular/core';
import {FeedsService} from '../feeds/feeds.service.ts';
import {FeedsComponent} from '../feeds/feeds.component.ts';
import {NewFeedComponent} from '../feeds/newFeed.component.ts';
import {IFeed} from '../feeds/IFeed.ts';
let template = require('./home.template.html');
let styles = require('./home.scss');
declare let componentHandler: any;

@Component({
    selector: 'home',
    template: template,
    styles: ['' + styles],
    directives: [FeedsComponent, NewFeedComponent],
    providers: [FeedsService]
})

export class HomeComponent  implements OnInit {
  feeds: IFeed[];
  isNewFeed: boolean = false;
  isViewFeed: boolean = false;
  constructor (private feedsService: FeedsService) {
  }
  ngOnInit () {
    this.feedsService.getFeeds().subscribe((response: IFeed[]) => {
      this.feeds = response;
    });
  }
  toogleAddNewFeed () {
    this.isNewFeed = !this.isNewFeed;
  }
  addFeed (feed: any) {
    this.feeds.push(feed);
    this.toogleAddNewFeed();
  }
  cancel () {
    this.toogleAddNewFeed();
  }
  viewFeed (isViewFeed: boolean) {
    this.isViewFeed = isViewFeed;
  }
}