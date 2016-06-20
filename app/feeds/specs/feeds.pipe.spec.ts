import {
  beforeEach, beforeEachProviders, describe,
  expect, it, inject
} from '@angular/core/testing';
import {EllipsisAfterPipe} from '../feeds.pipe.ts';

beforeEachProviders(() => [EllipsisAfterPipe]);

describe('EllipsisAfterPipe', () => {
  it('should create the EllipsisAfterPipe',
    inject([EllipsisAfterPipe], (ellipsisAfterPipe: EllipsisAfterPipe) => {
    expect(ellipsisAfterPipe).toBeTruthy();
  }));

  it('can obtain same string incase its length is less than the limit',
    inject([EllipsisAfterPipe], (ellipsisAfterPipe: EllipsisAfterPipe) => {
    expect(ellipsisAfterPipe.transform('abc', 10)).toEqual('abc');
  }));

  it('can add ellipsis after the specified limit',
    inject([EllipsisAfterPipe], (ellipsisAfterPipe: EllipsisAfterPipe) => {
    expect(ellipsisAfterPipe.transform('abcdefghijklmnopqrstuvwxyz', 10)).toEqual('abcdefghij ...');
  }));
});