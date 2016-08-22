import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {SignupComponent}  from './signup.component';
import {MatchValidatorDirective} from './matchValidator.directive.ts';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, JsonpModule],
  declarations: [SignupComponent, MatchValidatorDirective],
  exports: [SignupComponent]
})
export class SignupModule { }