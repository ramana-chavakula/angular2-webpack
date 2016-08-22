import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeedsComponent}  from './feeds.component';
import {FeedsListComponent}  from './feedsList.component';
import {FeedComponent} from '../feed/feed.component.ts';
import {NewFeedComponent} from '../newFeed/newFeed.component.ts';
import {RouterModule} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  imports: [CommonModule, RouterModule, HttpModule, JsonpModule, FormsModule],
  declarations: [FeedsComponent, FeedsListComponent, FeedComponent, NewFeedComponent],
  exports: [FeedsListComponent, FeedComponent, NewFeedComponent]
})
export class FeedsModule { }