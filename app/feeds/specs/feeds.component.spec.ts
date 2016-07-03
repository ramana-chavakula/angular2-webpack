import {
  beforeEach, beforeEachProviders, describe,
  expect, it, inject, async, setBaseTestProviders
} from '@angular/core/testing';
import {provide} from '@angular/core';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {
  TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';
import {FeedsComponent} from '../feeds.component.ts';

setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);

describe('FeedsComponent', () => {
  beforeEachProviders(() => [FeedsComponent, TestComponentBuilder]);

  it('can render feeds list', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(FeedsComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        componentFixture.componentInstance.feeds = [{
          'title': 'Post 1',
          'description': 'Post Description 1'
        }, {
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
        spyOn(componentInstance.viewFeed, 'emit');
        componentFixture.componentInstance.feeds = [{
          'title': 'Post 1',
          'description': 'Post Description 1'
        }, {
          'title': 'Post 2',
          'description': 'Post Description 2'
        }];
        componentFixture.detectChanges();
        expect(componentInstance.feedIndex).toBe(-1);
        expect(element.querySelectorAll('.mdl-card__title').length).toBe(2);
        componentFixture.componentInstance.select(1);
        componentFixture.detectChanges();
        expect(componentInstance.feedIndex).toBe(1);
        expect(componentInstance.viewFeed.emit).toHaveBeenCalledWith(true);
        expect(element.querySelector('h2').innerHTML).toContain('Post 2');
        expect(element.querySelector('.mdl-cell--12-col > div').innerHTML).toBe('Post Description 2');
      });
  })));

  it('can returns to feeds list', async(inject([TestComponentBuilder], (testComponentBuilder: TestComponentBuilder) => {
    return testComponentBuilder
      .createAsync(FeedsComponent).then((componentFixture: ComponentFixture<any>) => {
        let element = componentFixture.nativeElement;
        let componentInstance = componentFixture.componentInstance;
        spyOn(componentInstance.viewFeed, 'emit');
        componentFixture.componentInstance.feeds = [{
          'title': 'Post 1',
          'description': 'Post Description 1'
        }, {
          'title': 'Post 2',
          'description': 'Post Description 2'
        }];
        componentFixture.detectChanges();
        expect(componentInstance.feedIndex).toBe(-1);
        componentInstance.select(1);
        componentFixture.detectChanges();
        expect(componentInstance.feedIndex).toBe(1);
        expect(componentInstance.viewFeed.emit).toHaveBeenCalledWith(true);
        componentInstance.cancel();
        componentFixture.detectChanges();
        expect(componentInstance.feedIndex).toBe(-1);
        expect(componentInstance.viewFeed.emit).toHaveBeenCalledWith(false);
        expect(componentInstance.viewFeed.emit.calls.count()).toBe(2);
      });
  })));
});