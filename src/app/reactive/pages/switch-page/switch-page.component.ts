import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch-page',
  templateUrl: './switch-page.component.html',
  styles: ``,
})
export class SwitchPageComponent {
  public myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotify: ['', [Validators.required]],
    aceptCondition: [false, [Validators.requiredTrue]],
  });

  constructor(private fb: FormBuilder) {}

  public isNotValidField(field: string): boolean | null {
    return (
      this.myForm.controls[field].errors && this.myForm.controls[field].touched
    );
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }
}
