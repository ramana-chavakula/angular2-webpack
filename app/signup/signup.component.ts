import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MatchValidatorDirective } from './matchValidator.directive';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
let signupTemplate = require('./signup.template.html');
let styles = require('./signup.scss');
let self: any;
declare let componentHandler: any;

@Component({
  selector: 'signup',
  template: signupTemplate,
  styles: ['' + styles]
})

export class SignupComponent implements OnInit {
  public userName: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  public signupForm: FormGroup;
  public cpwd: string;
  constructor(private http: Http) {
    self = this;
    this.userName = new FormControl('',
      [Validators.required, Validators.minLength(3)]
    );
    this.email = new FormControl('',
      Validators.required,
      self.isUserExists
    );
    this.password = new FormControl('',
      Validators.required
    );
    this.confirmPassword = new FormControl('',
      Validators.required
    );
    this.signupForm = new FormGroup({
      userName: this.userName,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }
  public ngOnInit() {
    componentHandler.upgradeAllRegistered();
  }
  public isUserExists(control: FormControl): { [key: string]: any } {
    return self.http.get('/data/users.json')
      .map((response: Response) => response.json())
      .toPromise()
      .then((data: any) => {
        for (let user of data) {
          if (user.email === control.value) {
            return { 'user-exists': true };
          }
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  public signup() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}