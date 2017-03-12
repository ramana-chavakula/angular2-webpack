import { Pipe } from '@angular/core';
@Pipe({ name: 'ellipsisAfter' })
export class EllipsisAfterPipe {
  public transform(value: string, args: any): any {
    if (value.length < args) {
      return value;
    }
    return value.substring(0, args) + ' ...';
  }
}