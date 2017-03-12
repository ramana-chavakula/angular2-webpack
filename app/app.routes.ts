import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: 'feeds' }
];

export const routingProviders: any[] = [
];

export const routing = RouterModule.forRoot(appRoutes);