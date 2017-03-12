import { FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input, Output, EventEmitter, ElementRef, OnInit, OnDestroy } from '@angular/core';

let self: any;
@Directive({
  selector: '[match-with]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MatchValidatorDirective, multi: true }]
})

export class MatchValidatorDirective implements Validator {
  @Input('match-with') public toMatch: any;
  @Output() public ngModelChange: EventEmitter<any> = new EventEmitter();
  constructor(private elementRef: ElementRef) {
  }
  public ngOnInit() {
    self = this;
    this.toMatch.addEventListener('change', self.triggerValidation);
  }
  public triggerValidation() {
    let originalVal = self.elementRef.nativeElement.value;
    self.ngModelChange.emit('');
    setTimeout(function () {
      self.ngModelChange.emit(originalVal);
    }, 0);
  }
  public ngOnDestroy() {
    this.toMatch.removeEventListener('change', self.triggerValidation);
    self = null;
  }
  public validate(control: FormControl): { [key: string]: any } {
    if (control.value && control.value !== this.toMatch.value) {
      return { 'match-with': true };
    }
  }
}