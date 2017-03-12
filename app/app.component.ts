import { Component } from '@angular/core';
let appTemplate = require('./app.template.html');
let styles = require('./app.scss');

@Component({
  selector: 'my-app',
  template: appTemplate,
  styles: ['' + styles]
})
export class MyAppComponent {}