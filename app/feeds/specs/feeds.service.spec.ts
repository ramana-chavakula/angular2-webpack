// import {
//   inject, fakeAsync, tick, addProviders
// } from '@angular/core/testing';
// import {MockBackend} from '@angular/http/testing';
// import {
//   Http,
//   ConnectionBackend,
//   BaseRequestOptions,
//   Response,
//   ResponseOptions
// } from '@angular/http';
// import {provide} from '@angular/core';
// import 'rxjs';
// import {FeedsService} from '../feeds.service.ts';

// describe('FeedsService', () => {
//   beforeEach(() => {
//     addProviders([
//       BaseRequestOptions,
//       MockBackend,
//       FeedsService,
//       {provide:Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
//         return new Http(backend, defaultOptions);
//       }, deps: [MockBackend, BaseRequestOptions]},
//     ]);
//   });

//   it('can retrive feeds', inject([FeedsService, MockBackend],
//     fakeAsync((feedsService: FeedsService, mockBackend: MockBackend) => {
//       let result: any;
//       mockBackend.connections.subscribe((connection: any) => {
//         expect(connection.request.url).toBe('./data/feeds.json');
//         let response = new ResponseOptions({
//           body: [{
//             'id': 'fid1',
//             'title': 'Post 1',
//             'description': 'Post Description 1'
//           }]
//         });
//         connection.mockRespond(new Response(response));
//       });
//       feedsService.getFeeds().subscribe((response) => {
//         result = response;
//       });
//       tick();
//       expect(result[0].id).toBe('fid1');
//       expect(result[0].title).toBe('Post 1');
//       expect(result[0].description).toBe('Post Description 1');
//     })
//   ));
// });