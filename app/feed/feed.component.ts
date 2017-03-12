import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFeed } from '../feeds/IFeed';
import { FeedsService } from '../feeds/feeds.service';
import { Subscription } from 'rxjs';
let template = require('./feed.template.html');
let styles = require('./feed.scss');

@Component({
  selector: 'feed',
  template: template,
  styles: ['' + styles]
})

export class FeedComponent implements OnInit {
  public feed: IFeed = {
    id: '',
    title: '',
    description: ''
  };
  private feedSubscription: Subscription;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private feedsService: FeedsService) {
    console.log(this.activatedRoute.snapshot.data.feed);
  }
  public ngOnInit() {
    if (this.activatedRoute.snapshot.data.feed == null) {
      this.feedSubscription = this.feedsService.getFeed(this.activatedRoute.snapshot.params.id).subscribe((response: IFeed) => {
        this.feed = response;
      });
    } else {
      this.feed = this.activatedRoute.snapshot.data.feed;
    }
  }
  public ngOnDestroy() {
    this.feedSubscription.unsubscribe();
  }
  public cancel() {
    this.router.navigate(['feeds']);
  }
}