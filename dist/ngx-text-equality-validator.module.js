import { NgModule } from '@angular/core';
import { TextEqualityValidatorDirective } from './directives/ngx-text-equality-validator.directive';
var TextEqualityValidatorModule = (function () {
    function TextEqualityValidatorModule() {
    }
    TextEqualityValidatorModule.forRoot = function () {
        return {
            ngModule: TextEqualityValidatorModule,
            providers: []
        };
    };
    return TextEqualityValidatorModule;
}());
export { TextEqualityValidatorModule };
TextEqualityValidatorModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TextEqualityValidatorDirective],
                exports: [
                    TextEqualityValidatorDirective
                ]
            },] },
];
/** @nocollapse */
TextEqualityValidatorModule.ctorParameters = function () { return []; };
//# sourceMappingURL=ngx-text-equality-validator.module.js.map