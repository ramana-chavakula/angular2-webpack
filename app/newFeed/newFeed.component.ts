import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
let template = require('./newFeed.template.html');
let styles = require('./newFeed.scss');
import { IFeed } from '../feeds/IFeed';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
declare let componentHandler: any;

@Component({
  selector: 'new-feed',
  template: template,
  styles: ['' + styles]
})

export class NewFeedComponent implements AfterViewInit {
  public newFeed: IFeed = {
    id: '',
    title: '',
    description: ''
  };
  constructor(private router: Router) {
  }
  public ngAfterViewInit() {
    componentHandler.upgradeAllRegistered();
  }
  public add(feed: IFeed) {
    console.log(feed);
    this.router.navigate(['feeds']);
  }
  public cancel() {
    this.router.navigate(['feeds']);
  }
}

export class CanDeactiveNewFeed implements CanDeactivate<NewFeedComponent> {
  public canDeactivate(component: NewFeedComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return confirm('Do you really want to leave the page?');
  }
}