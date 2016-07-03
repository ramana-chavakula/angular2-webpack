import {provideRouter, RouterConfig} from '@angular/router';
import {HomeComponent} from './home/home.component.ts';
import {ContactComponent} from './contact/contact.component.ts';
import {SignupComponent} from './signup/signup.component.ts';

let routes: RouterConfig = [
  {
    path: '**',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
