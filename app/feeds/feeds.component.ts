import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IFeed } from './IFeed';
let template = require('./feeds.template.html');
let styles = require('./feeds.scss');

@Component({
  selector: 'feeds',
  template: template,
  styles: ['' + styles]
})

export class FeedsComponent {
  @Input('data') public feeds: IFeed[];
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }
  public viewFeed(index: number) {
    this.router.navigate(['.', this.feeds[index].id], { relativeTo: this.activatedRoute });
  }
}