import {Component, Input, Output, EventEmitter, AfterViewInit} from '@angular/core';
let template = require('./newFeed.template.html');
let styles = require('./newFeed.scss');
import {IFeed} from './IFeed.ts';
declare let componentHandler: any;

@Component({
    selector: 'new-feed',
    template: template,
    styles: ['' + styles]
})

export class NewFeedComponent implements AfterViewInit {
  @Output() add: EventEmitter <IFeed> = new EventEmitter <IFeed>();
  @Output() cancel: EventEmitter <any> = new EventEmitter <any>();
  newFeed: IFeed = {
    title: '',
    description: ''
  };
  constructor () {
  }
  ngAfterViewInit () {
    componentHandler.upgradeAllRegistered();
  }
  addFeed (feed: IFeed) {
    this.add.emit(feed);
  }
  cancelFeed () {
    this.cancel.emit(null);
  }
}