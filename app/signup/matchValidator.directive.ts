import {Validator, NG_VALIDATORS, Control} from '@angular/common';
import {provide, Directive, Input, ElementRef, OnInit, OnDestroy} from '@angular/core';

let _this: any;
@Directive({
  selector: '[match-with]',
  providers: [provide(NG_VALIDATORS, {useExisting: MatchValidatorDirective, multi: true})]
})

export class MatchValidatorDirective implements Validator {
  @Input('match-with') toMatch: any;
  constructor(private ele: ElementRef) {
  }
  ngOnInit() {
    _this = this;
    this.toMatch.addEventListener("change", _this.triggerValidation);
  }
  triggerValidation () {
    // if (_this.ele.nativeElement.value !== _this.toMatch.value) {
    // }
    //_this.ele.nativeElement.value = "";
  }
  ngOnDestroy() {
    this.toMatch.removeEventListener("change", _this.triggerValidation);
  }
  validate (control: Control): {[key: string]: any} {
    if (control.value === this.toMatch.value) {
      this.ele.nativeElement.style.border = '';
      return;
    }
    this.ele.nativeElement.style.border = '1px solid red';
    return {"match-with": true};
  }
}