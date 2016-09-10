import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeedsComponent}  from './feeds.component';
import {FeedsListComponent}  from './feedsList.component';
import {EllipsisAfterPipe} from './feeds.pipe.ts';
import {FeedComponent} from '../feed/feed.component.ts';
import {NewFeedComponent} from '../newFeed/newFeed.component.ts';
import {RouterModule} from '@angular/router';
import {HttpModule, JsonpModule} from '@angular/http';
import {FeedsService} from './feeds.service.ts';

@NgModule({
  imports: [CommonModule, RouterModule, HttpModule, JsonpModule, FormsModule],
  declarations: [FeedsComponent, FeedsListComponent, FeedComponent, NewFeedComponent, EllipsisAfterPipe],
  exports: [FeedsListComponent, FeedComponent, NewFeedComponent],
  providers: [FeedsService]
})
export class FeedsModule { }