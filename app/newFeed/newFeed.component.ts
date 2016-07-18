import {Component, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';
let template = require('./newFeed.template.html');
let styles = require('./newFeed.scss');
import {IFeed} from '../feeds/IFeed.ts';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';
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

export class CanDeactiveNewFeed implements CanDeactivate <NewFeedComponent> {
  constructor () {
  }
  canDeactivate (component: NewFeedComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    return confirm('Do you really want to leave the page?');
  }
}