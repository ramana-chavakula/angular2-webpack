import {
  async, TestBed, inject
} from '@angular/core/testing';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

import {EllipsisAfterPipe} from '../feeds.pipe.ts';

describe('EllipsisAfterPipe', () => {
  let ellipsisAfterPipe: EllipsisAfterPipe;

  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EllipsisAfterPipe]
    });
  });

  beforeEach(() => {
    ellipsisAfterPipe = new EllipsisAfterPipe();
  });

  it('should create the EllipsisAfterPipe', () => {
    expect(ellipsisAfterPipe).toBeTruthy();
  });

  it('can obtain same string incase its length is less than the limit', () => {
    expect(ellipsisAfterPipe.transform('abc', 10)).toEqual('abc');
  });

  it('can add ellipsis after the specified limit', () => {
    expect(ellipsisAfterPipe.transform('abcdefghijklmnopqrstuvwxyz', 10)).toEqual('abcdefghij ...');
  });
});