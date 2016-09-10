import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {IFeed} from './IFeed.ts';
let template = require('./feeds.template.html');
let styles = require('./feeds.scss');
declare let componentHandler: any;

@Component({
  selector: 'feeds',
  template: template,
  styles: ['' + styles]
})

export class FeedsComponent {
  @Input('data') feeds: IFeed[];
  constructor (public router: Router, public activatedRoute: ActivatedRoute) {
  }
  viewFeed(index: number) {
    this.router.navigate(['.', this.feeds[index].id], {relativeTo: this.activatedRoute});
  }
}