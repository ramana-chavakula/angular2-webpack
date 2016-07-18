import {bootstrap} from '@angular/platform-browser-dynamic';
import {MyAppComponent} from './app.component.ts';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import {CanDeactiveNewFeed} from './newFeed/newFeed.component.ts';
// enable production mode and thus disable debugging information
//enableProdMode();
bootstrap(MyAppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  CanDeactiveNewFeed
]);