import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component.ts';
import {ContactComponent} from './contact/contact.component.ts';
import {SignupComponent} from './signup/signup.component.ts';
import {FeedsListComponent} from './feeds/feedsList.component.ts';
import {FeedComponent} from './feed/feed.component.ts';
import {NewFeedComponent} from './newFeed/newFeed.component.ts';

let routes: RouterConfig = [
  {
    path: 'feeds',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: FeedsListComponent
      },
      {
        path: 'feed/:id',
        component: FeedComponent,
        data: {
          feed: null
        }
      },
      {
        path: 'new',
        component: NewFeedComponent
      }
    ]
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    redirectTo: 'feeds',
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
