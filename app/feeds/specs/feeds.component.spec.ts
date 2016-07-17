import {
  inject, async, setBaseTestProviders, addProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import {Router, ActivatedRoute} from '@angular/router';
import {FeedsComponent} from '../feeds.component.ts';

describe('FeedsComponent', () => {
  setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);
  class MockRouter { 
    navigate () {}
  }
  class MockActivatedRoute { }
  beforeEach(() => {
    addProviders([
      TestComponentBuilder,
      {provide: ActivatedRoute, useClass: MockActivatedRoute},
      {provide: Router, useClass: MockRouter},
      FeedsComponent
    ]);
  });

  it('can render feeds list', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(FeedsComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        componentFixture.componentInstance.feeds = [{
          'id': 'fid1',
          'title': 'Post 1',
          'description': 'Post Description 1'
        }, {
          'id': 'fid2',
          'title': 'Post 2',
          'description': 'Post Description 2'
        }];
        componentFixture.detectChanges();
        expect(element.querySelectorAll('.mdl-card__title').length).toBe(2);
      });
  })));

  it('can select a feed to view', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(FeedsComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        let componentInstance = componentFixture.componentInstance;
        spyOn(componentInstance.router, 'navigate');
        spyOn(componentInstance, 'viewFeed').and.callThrough();
        componentInstance.feeds = [{
          'id': 'fid1',
          'title': 'Post 1',
          'description': 'Post Description 1'
        }, {
          'id': 'fid2',
          'title': 'Post 2',
          'description': 'Post Description 2'
        }];
        componentFixture.detectChanges();
        expect(element.querySelectorAll('.mdl-card__title').length).toBe(2);
        componentInstance.viewFeed(1);
        componentFixture.detectChanges();
        expect(componentInstance.viewFeed).toHaveBeenCalledWith(1);
        expect(componentInstance.router.navigate).toHaveBeenCalledWith(['feed', 'fid2'], {relativeTo: componentInstance.activatedRoute});
      });
  })));
});