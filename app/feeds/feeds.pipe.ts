import {Pipe} from '@angular/core';
@Pipe({name: 'ellipsisAfter'})
export class EllipsisAfterPipe {
  transform(value: string, args: any) : any {
    //console.log(value.length, args)
    if (value.length < args) {
      return value;
    }
    return value.substring(0, args) + ' ' + '...';
  }
}