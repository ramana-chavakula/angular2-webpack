import {
  inject, setBaseTestProviders, async, addProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {TestComponentBuilder, ComponentFixture, TestComponentRenderer} from '@angular/core/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

import {FeedsListComponent} from '../feedsList.component.ts';
import {FeedsService} from '../feeds.service.ts';
import {IFeed} from '../IFeed.ts';
import {Observable, Observer} from 'rxjs';
import {HTTP_PROVIDERS} from '@angular/http';
import {Router, ActivatedRoute} from '@angular/router';
import {LocationStrategy} from '@angular/common';

class MockFeedsService {
  getFeeds (): Observable <IFeed []> {
    return new Observable <IFeed []> ((observer: Observer<IFeed []>) => {
      //emiting values
      observer.next([{
        'id': 'fid1',
        'title': 'Post 1',
        'description': 'Post Description 1'
      }]);
      //to complete stream use observer.complete();
    });
  }
}

describe('FeedsListComponent', () => {
  setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
  class MockRouter {}
  class MockActivatedRoute {}
  beforeEach(() => {
    addProviders([
      TestComponentBuilder,
      FeedsListComponent,
      {provide: FeedsService, useClass: MockFeedsService},
      {provide: ActivatedRoute, useClass: MockActivatedRoute},
      {provide: Router, useClass: MockRouter},
      LocationStrategy
    ]);
  });

  it('can fetch the feeds list', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(FeedsListComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        componentFixture.detectChanges();
        expect(componentFixture.componentInstance.feeds.length).toBe(1);
        expect(componentFixture.componentInstance.feeds[0].title).toBe('Post 1');
      });
  })));
});