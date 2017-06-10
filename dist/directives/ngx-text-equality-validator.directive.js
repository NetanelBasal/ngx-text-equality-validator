import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Input } from "@angular/core";
var TextEqualityValidatorDirective = (function () {
    function TextEqualityValidatorDirective() {
    }
    TextEqualityValidatorDirective.prototype.registerOnValidatorChange = function (fn) {
        this._onChange = fn;
    };
    /**
     *
     * @param c
     * @returns {{validateEqual: boolean}|null}
     */
    TextEqualityValidatorDirective.prototype.validate = function (c) {
        var _this = this;
        var passwordVal = c.value;
        var repeatEle = c.root.get(this.validateEqualTo);
        if (repeatEle) {
            this.oldVal = repeatEle.value;
        }
        c.root.valueChanges.subscribe(function (changes) {
            if (_this.oldVal !== changes[_this.validateEqualTo]) {
                _this._onChange();
            }
        });
        return this.checkEquality(passwordVal, repeatEle);
    };
    /**
     *
     * @param passwordVal
     * @param repeatEle
     * @returns {any}
     */
    TextEqualityValidatorDirective.prototype.checkEquality = function (passwordVal, repeatEle) {
        if (repeatEle && passwordVal !== repeatEle.value)
            return {
                validateEqual: true
            };
        return null;
    };
    return TextEqualityValidatorDirective;
}());
export { TextEqualityValidatorDirective };
TextEqualityValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[validateEqualTo][ngModel],[validateEqualTo][formControlName]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return TextEqualityValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
TextEqualityValidatorDirective.ctorParameters = function () { return []; };
TextEqualityValidatorDirective.propDecorators = {
    'validateEqualTo': [{ type: Input },],
};
//# sourceMappingURL=ngx-text-equality-validator.directive.js.map