import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AsyncValidationService } from '../../../shared/services/async-validation.service';
import { ValiationService } from '../../../shared/services/valiation.service';
// import * as myValidators from '../../../shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group(
    {
      fullName: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validServ.firstNameAndLastnamePattern),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          this.validServ.canBeStrider,
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.validServ.emailPattern)],
        [this.asyncValid],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.validServ.isFieldOneEqualFieldTwo('password', 'confirmPassword'),
      ],
    }
  );

  constructor(
    private fb: FormBuilder,
    private validServ: ValiationService,
    private asyncValid: AsyncValidationService
  ) {}

  isInValidField(field: string) {
    return this.validServ.isInValidField(this.myForm, field);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
