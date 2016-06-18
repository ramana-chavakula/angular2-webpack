import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {MyAppComponent} from './app.component.ts';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
// enable production mode and thus disable debugging information
//enableProdMode();
bootstrap(MyAppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);