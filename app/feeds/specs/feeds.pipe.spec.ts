// import {inject, addProviders} from '@angular/core/testing';
// import {EllipsisAfterPipe} from '../feeds.pipe.ts';

// describe('EllipsisAfterPipe', () => {
//   let ellipsisAfterPipe: EllipsisAfterPipe;

//   beforeEach(() => {addProviders([EllipsisAfterPipe])});

//   beforeEach(inject([EllipsisAfterPipe], (_ellipsisAfterPipe: EllipsisAfterPipe) => {
//     ellipsisAfterPipe = _ellipsisAfterPipe;
//   }));

//   it('should create the EllipsisAfterPipe', () => {
//     expect(ellipsisAfterPipe).toBeTruthy();
//   });

//   it('can obtain same string incase its length is less than the limit', () => {
//     expect(ellipsisAfterPipe.transform('abc', 10)).toEqual('abc');
//   });

//   it('can add ellipsis after the specified limit', () => {
//     expect(ellipsisAfterPipe.transform('abcdefghijklmnopqrstuvwxyz', 10)).toEqual('abcdefghij ...');
//   });
// });