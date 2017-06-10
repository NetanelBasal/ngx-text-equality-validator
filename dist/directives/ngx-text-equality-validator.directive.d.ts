import { Validator, AbstractControl } from '@angular/forms';
export declare class TextEqualityValidatorDirective implements Validator {
    validateEqualTo: string;
    private _onChange;
    oldVal: string;
    registerOnValidatorChange(fn: () => void): void;
    /**
     *
     * @param c
     * @returns {{validateEqual: boolean}|null}
     */
    validate(c: AbstractControl): {
        validateEqual: boolean;
    };
    /**
     *
     * @param passwordVal
     * @param repeatEle
     * @returns {any}
     */
    checkEquality(passwordVal: string, repeatEle: any): {
        validateEqual: boolean;
    };
}
