import {Component} from '@angular/core';

@Component({
    selector: 'contact',
    template: `<h3 [innerHTML]="message"></h3>`,
    styles: [`h3{
      text-align: center;
    }`]
})

export class ContactComponent  {
  message: string = 'Contact me on chnvrm@gmail.com';
  constructor () {
  }
}