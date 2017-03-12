import {
  inject, fakeAsync, tick, TestBed
} from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MockBackend } from '@angular/http/testing';
import {
  Http,
  ConnectionBackend,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from '@angular/http';
import 'rxjs';

import { FeedsService } from '../feeds.service';
import { IFeed } from '../IFeed';

describe('FeedsService', () => {
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        FeedsService,
        {
          provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }, deps: [MockBackend, BaseRequestOptions]
        },
      ]
    });
  });

  it('can retrive feeds', inject([FeedsService, MockBackend],
    fakeAsync((feedsService: FeedsService, mockBackend: MockBackend) => {
      let result: IFeed[];
      mockBackend.connections.subscribe((connection: any) => {
        expect(connection.request.url).toBe('./data/feeds.json');
        let response = new ResponseOptions({
          body: [{
            'id': 'fid1',
            'title': 'Post 1',
            'description': 'Post Description 1'
          }]
        });
        connection.mockRespond(new Response(response));
      });
      feedsService.getFeeds().subscribe((response) => {
        result = response;
      });
      tick();
      expect(result[0].id).toBe('fid1');
      expect(result[0].title).toBe('Post 1');
      expect(result[0].description).toBe('Post Description 1');
    })
  ));

  it('can retrive the feed using feed id', inject([FeedsService, MockBackend],
    fakeAsync((feedsService: FeedsService, mockBackend: MockBackend) => {
      let result: IFeed;
      mockBackend.connections.subscribe((connection: any) => {
        expect(connection.request.url).toBe('./data/feeds.json');
        let response = new ResponseOptions({
          body: [{
            'id': 'fid1',
            'title': 'Post 1',
            'description': 'Post Description 1'
          }, {
            'id': 'fid2',
            'title': 'Post 2',
            'description': 'Post Description 2'
          }]
        });
        connection.mockRespond(new Response(response));
      });
      feedsService.getFeed('fid2').subscribe((response) => {
        result = response;
      });
      tick();
      expect(result.id).toBe('fid2');
      expect(result.title).toBe('Post 2');
      expect(result.description).toBe('Post Description 2');
    })
  ));
});