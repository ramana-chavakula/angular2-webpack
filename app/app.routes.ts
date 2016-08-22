import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component.ts';
import {ContactComponent} from './contact/contact.component.ts';
import {SignupComponent} from './signup/signup.component.ts';

const appRoutes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: ContactComponent}
];

export const routingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);