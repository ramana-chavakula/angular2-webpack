import {FormControl, Validator, NG_VALIDATORS} from '@angular/forms';
import {NgZone} from "@angular/core";
import {provide, Directive, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy} from '@angular/core';

let self: any;
@Directive({
  selector: '[match-with]',
  providers: [provide(NG_VALIDATORS, {useExisting: MatchValidatorDirective, multi: true})]
})

export class MatchValidatorDirective implements Validator {
  @Input('match-with') toMatch: any;
  @Output() ngModelChange: EventEmitter <any> = new EventEmitter();
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit() {
    self = this;
    this.toMatch.addEventListener('change', self.triggerValidation);
  }
  triggerValidation () {
    self.ngModelChange.emit('');
    self.ngModelChange.emit(self.elementRef.nativeElement.value);
  }
  ngOnDestroy() {
    this.toMatch.removeEventListener('change', self.triggerValidation);
    self = null;
  }
  validate (control: FormControl): {[key: string]: any} {
    if (control.value && control.value !== this.toMatch.value) {
      return {'match-with': true};
    }
  }
}