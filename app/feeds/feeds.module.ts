import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedsComponent } from './feeds.component';
import { FeedsListComponent } from './feedsList.component';
import { EllipsisAfterPipe } from './feeds.pipe';
import { FeedComponent } from '../feed/feed.component';
import { NewFeedComponent } from '../newFeed/newFeed.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FeedsService } from './feeds.service';

@NgModule({
  imports: [CommonModule, RouterModule, HttpModule, FormsModule],
  declarations: [FeedsComponent, FeedsListComponent, FeedComponent, NewFeedComponent, EllipsisAfterPipe],
  exports: [FeedsListComponent, FeedComponent, NewFeedComponent],
  providers: [FeedsService]
})
export class FeedsModule { }