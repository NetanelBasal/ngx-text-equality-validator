import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { NgxTextEqualityValidatorModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        NgxTextEqualityValidatorModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
