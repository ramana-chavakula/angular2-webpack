import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HomeComponent} from './home/home.component.ts';
import {ContactComponent} from './contact/contact.component.ts';
import {SignupComponent} from './signup/signup.component.ts';

let appTemplate = require('./app.template.html');
let styles = require('./app.scss');

@Component({
    selector: 'my-app',
    template: appTemplate,
    styles: ['' + styles],
    directives: [ROUTER_DIRECTIVES]
})
export class MyAppComponent {
  constructor () {
  }
}