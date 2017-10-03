import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => TextEqualityValidatorDirective), multi: true}
  ]
})
export class TextEqualityValidatorDirective implements Validator, OnDestroy {
  @Input() validateEqualTo : string;
  private _onChange : () => void;
  private subscription;
  oldVal : string;

  registerOnValidatorChange( fn : () => void ) {
    this._onChange = fn;
  }

  /**
   *
   * @param c
   * @returns {{validateEqual: boolean}|null}
   */
  validate( c : AbstractControl ) {
    let eleVal = c.value;
    let repeatEle = c.root.get(this.validateEqualTo);
    if ( repeatEle ) {
      this.oldVal = repeatEle.value;
    }
    if ( !this.subscription ) {
      this.subscription = c.root.valueChanges.subscribe(changes => {
        if ( this.oldVal !== changes[ this.validateEqualTo ] ) {
          this._onChange();
        }
      });
    }

    return this.checkEquality(eleVal, repeatEle);

  }

  /**
   *
   * @param passwordVal
   * @param repeatEle
   * @returns {any}
   */
  checkEquality( passwordVal : string, repeatEle : any ) {
    if ( repeatEle && passwordVal !== repeatEle.value ) return {
      validateEqual: true
    }
    return null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}


