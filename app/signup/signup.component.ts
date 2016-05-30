import {Component} from '@angular/core';
import {MatchValidatorDirective} from './matchValidator.directive.ts';
let signupTemplate = require('./signup.template.html');
interface Signup {
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
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
  constructor () {
  }
  signup () {
    alert('ok');
  }
  log (val: any) {
    console.log(val);
  }
}