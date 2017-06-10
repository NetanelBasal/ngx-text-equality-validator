import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextEqualityValidatorDirective } from './directives/ngx-text-equality-validator.directive';

@NgModule({
    declarations: [TextEqualityValidatorDirective],
    exports: [
      TextEqualityValidatorDirective
    ]
})
export class TextEqualityValidatorModule {
    static forRoot() {
        return {
            ngModule: TextEqualityValidatorModule,
            providers: []
        };
    }
}
