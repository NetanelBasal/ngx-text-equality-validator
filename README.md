#### Angular compare text fields validator - useful for password match fields

`npm install --save ngx-text-equality-validator`  

`import { TextEqualityValidatorModule  } from "ngx-text-equality-validator";`  

Add the module to your application

#### Model driven

```html
 <form novalidate [formGroup]="signUpForm">
  <input type="text"
         placeholder="password"
         formControlName="password"
         validateEqualTo="repeatPassword">
  <input type="text" placeholder="confirm" formControlName="repeatPassword">
  <input type="submit" value="Submit" [disabled]="signUpForm.invalid">
  <p *ngIf="signUpForm.get('password').hasError('validateEqual')">Passwords don't match</p>
</form>
```

```js
export class AppComponent {
  signUpForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      password: [""],
      repeatPassword: [""]
    });
  }
}
```

#### Template driven
```html
<form novalidate #form="ngForm">
  <input type="text"
         placeholder="password"
         ngModel
         validateEqualTo="repeatPassword"
         name="password"
         required
         #passwordControl="ngModel"
  >
  <input type="text" placeholder="confirm" name="repeatPassword" ngModel required>
  <input type="submit" value="Submit" [disabled]="form.invalid">
 <p *ngIf="passwordControl.errors?.validateEqual">Passwords don't match</p>
</form>

```

- AOT compatible. 
