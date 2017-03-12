import {
  inject, async, TestBed
} from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Observable, Observer } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Input } from '@angular/core';

import { FeedsListComponent } from '../feedsList.component';
import { FeedsComponent } from '../feeds.component';
import { EllipsisAfterPipe } from '../feeds.pipe';
import { FeedsService } from '../feeds.service';
import { IFeed } from '../IFeed';

class MockFeedsService {
  public getFeeds(): Observable<IFeed[]> {
    return new Observable<IFeed[]>((observer: Observer<IFeed[]>) => {
      // emiting values
      observer.next([{
        'id': 'fid1',
        'title': 'Post 1',
        'description': 'Post Description 1'
      }]);
      // to complete stream use observer.complete();
    });
  }
}

@Component({
  selector: 'test',
  template: 'test'
})
class RouterTestingComponent {
}
let MockRoutes = RouterTestingModule.withRoutes([
  { path: 'new', component: RouterTestingComponent }
]);

describe('FeedsListComponent', () => {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MockRoutes],
      declarations: [FeedsListComponent, FeedsComponent, EllipsisAfterPipe, RouterTestingComponent],
      providers: [
        { provide: FeedsService, useClass: MockFeedsService }
      ]
    });
  });

  it('can fetch the feeds list', async(() => {
    return TestBed
      .compileComponents().then(() => {
        let componentFixture = TestBed.createComponent(FeedsListComponent);
        let element = componentFixture.nativeElement;
        componentFixture.detectChanges();
        expect(componentFixture.componentInstance.feeds.length).toBe(1);
        expect(componentFixture.componentInstance.feeds[0].title).toBe('Post 1');
      });
  }));
});