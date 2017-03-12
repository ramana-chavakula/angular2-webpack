import { FeedsListComponent } from '../feeds/feedsList.component';
import { FeedComponent } from '../feed/feed.component';
import { NewFeedComponent } from '../newFeed/newFeed.component';
import { HomeComponent } from './home.component';

import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [
  {
    path: 'feeds',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedsListComponent
      },
      {
        path: 'new',
        component: NewFeedComponent
      },
      {
        path: ':id',
        component: FeedComponent,
        data: {
          feed: null
        }
      }
    ]
  }
];


export const routingProviders: any[] = [
];

export const routing = RouterModule.forChild(homeRoutes);