import {FeedsListComponent} from '../feeds/feedsList.component.ts';
import {FeedComponent} from '../feed/feed.component.ts';
import {NewFeedComponent} from '../newFeed/newFeed.component.ts';
import {HomeComponent} from './home.component.ts'

import {Routes, RouterModule} from '@angular/router';

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