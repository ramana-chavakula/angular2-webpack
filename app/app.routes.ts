import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component.ts';
import {ContactComponent} from './contact/contact.component.ts';
import {SignupComponent} from './signup/signup.component.ts';

let routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
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
    redirectTo: '',
    terminal: true
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
