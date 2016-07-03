import {
  beforeEach, beforeEachProviders, describe,
  expect, it, inject, setBaseTestProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';

import {HomeComponent} from './home.component.ts';
import {FeedsService} from '../feeds/feeds.service.ts';
import {IFeed} from '../feeds/IFeed.ts';
import {Observable, Observer} from 'rxjs';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

class MockFeedsService {
  getFeeds (): Observable <IFeed []> {
    return new Observable <IFeed []> ((observer: Observer<IFeed []>) => {
      //emiting values
      observer.next([{
        'title': 'Post 1',
        'description': 'Post Description 1'
      }]);
      //to complete stream use observer.complete();
    });
  }
}

describe('HomeComponent', () => {
  beforeEachProviders(() => [
    HomeComponent,
    TestComponentBuilder,
    provide(FeedsService, {useClass: MockFeedsService})
  ]);

  it('can fetch the feeds list', inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(HomeComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        componentFixture.detectChanges();
        expect(componentFixture.componentInstance.feeds.length).toBe(1);
        expect(componentFixture.componentInstance.feeds[0].title).toBe('Post 1');
      });
  }));
});
