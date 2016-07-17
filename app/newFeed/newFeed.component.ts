import {Component, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
let template = require('./newFeed.template.html');
let styles = require('./newFeed.scss');
import {IFeed} from '../feeds/IFeed.ts';
declare let componentHandler: any;

@Component({
    selector: 'new-feed',
    template: template,
    styles: ['' + styles]
})

export class NewFeedComponent implements AfterViewInit {
  newFeed: IFeed = {
    id: '',
    title: '',
    description: ''
  };
  constructor (private router: Router) {
  }
  ngAfterViewInit () {
    componentHandler.upgradeAllRegistered();
  }
  add (feed: IFeed) {
    console.log(feed);
    this.router.navigate(['feeds']);
  }
  cancel () {
    this.router.navigate(['feeds']);
  }
}