import {
  async, TestBed
} from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Router, ActivatedRoute } from '@angular/router';
import { FeedsComponent } from '../feeds.component';
import { EllipsisAfterPipe } from '../feeds.pipe';

describe('FeedsComponent', () => {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  class MockRouter {
    public navigate() {
      // empty block
    }
  }

  class MockActivatedRoute { }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedsComponent, EllipsisAfterPipe],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter }
      ]
    });
  });

  it('can render feeds list', async(() => {
    return TestBed
      .compileComponents().then(() => {
        let componentFixture = TestBed.createComponent(FeedsComponent);
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
  }));

  it('can select a feed to view', async(() => {
    return TestBed
      .compileComponents().then(() => {
        let componentFixture = TestBed.createComponent(FeedsComponent);
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
        expect(componentInstance.router.navigate).toHaveBeenCalledWith(['.', 'fid2'], { relativeTo: componentInstance.activatedRoute });
      });
  }));
});