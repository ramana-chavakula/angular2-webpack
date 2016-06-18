import {Component, OnInit} from '@angular/core';
import {Control, Validators, FORM_DIRECTIVES, FormBuilder, ControlGroup} from '@angular/common';
import {MatchValidatorDirective} from './matchValidator.directive.ts';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
let signupTemplate = require('./signup.template.html');
let styles = require('./signup.scss');
let self: any;
declare let componentHandler: any;

@Component({
    selector: 'signup',
    template: signupTemplate,
    styles: ['' + styles],
    directives: [FORM_DIRECTIVES, MatchValidatorDirective]
})

export class SignupComponent  implements OnInit {
  userName: Control;
  email: Control;
  password: Control;
  confirmPassword: Control;
  signupForm: ControlGroup;
  constructor (private http: Http, formBuilder: FormBuilder) {
    self = this;
    this.userName = new Control('',
      Validators.compose([Validators.required, Validators.minLength(3)])
    );
    this.email = new Control('',
      Validators.required,
      self.isUserExists
    );
    this.password = new Control('',
      Validators.required
    );
    this.confirmPassword = new Control('',
      Validators.required
    );
    this.signupForm = formBuilder.group({
      userName: this.userName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
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
    console.log(this.signupForm._value);
  }
}