import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EllipsisAfterPipe} from './feeds.pipe.ts';
let template = require('./feeds.template.html');
let styles = require('./feeds.scss');
import {IFeed} from './IFeed.ts';
declare let componentHandler: any;

@Component({
    selector: 'feeds',
    template: template,
    styles: ['' + styles],
    pipes: [EllipsisAfterPipe]
})

export class FeedsComponent {
  @Input('data') feeds: IFeed[];
  @Output() viewFeed: EventEmitter <boolean> = new EventEmitter <boolean>();
  feedIndex: number = -1;
  constructor () {
  }
  select(index: number) {
    this.feedIndex = index;
    this.viewFeed.emit(true);
  }
  cancel () {
    this.feedIndex = -1;
    this.viewFeed.emit(false);
  }
}