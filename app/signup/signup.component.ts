import {Component} from '@angular/core';
import {Control, Validators} from '@angular/common';
import {MatchValidatorDirective} from './matchValidator.directive.ts';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
let signupTemplate = require('./signup.template.html');
let self: any;
interface Signup {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
@Component({
    selector: 'signup',
    template: signupTemplate,
    directives: [MatchValidatorDirective]
})

export class SignupComponent  {
  signupModel: Signup = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  emailControl: Control;
  constructor (private http: Http) {
    self = this;
    this.emailControl = new Control('',
      undefined,
      self.isUserExists
    );
  }
  isUserExists (control: Control): {[key: string]: any} {
    return self.http.get('/data/users.json')
      .map((response: Response) => response.json())
      .toPromise()
      .then((data: any) => {
        for (let user of data) {
          if (user.email === control.value) {
            return {'user-exists': true};
          }
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  signup () {
    alert('ok');
  }
}