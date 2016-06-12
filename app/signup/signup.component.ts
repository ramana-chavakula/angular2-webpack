import {Component, OnInit} from '@angular/core';
import {Control, Validators} from '@angular/common';
import {MatchValidatorDirective} from './matchValidator.directive.ts';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
let signupTemplate = require('./signup.template.html');
let styles = require('./signup.scss');
let self: any;
declare let componentHandler: any;
interface Signup {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
@Component({
    selector: 'signup',
    template: signupTemplate,
    styles: ['' + styles],
    directives: [MatchValidatorDirective]
})

export class SignupComponent  implements OnInit{
  signupModel: Signup = {
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  emailControl: Control;
  requiredControl: Control;
  constructor (private http: Http) {
    self = this;
    this.emailControl = new Control('',
      Validators.required,
      self.isUserExists
    );
    this.requiredControl = new Control('xyz',
      Validators.required
    );
  }
  ngOnInit () {
    componentHandler.upgradeAllRegistered();
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