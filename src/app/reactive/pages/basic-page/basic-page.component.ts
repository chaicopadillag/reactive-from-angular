import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasicFormI } from '../../interfaces/basic.interface';

const initialData: BasicFormI = {
  product: '',
  price: 0,
  inStock: 0,
};

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``,
})
export class BasicPageComponent implements OnInit {
  public formGroup: FormGroup = this.formBuilder.group({
    product: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStock: [0, [Validators.required, Validators.min(0)]],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup.reset(initialData);
  }

  public isNotValidField(field: string): boolean | null {
    return (
      this.formGroup.controls[field].errors &&
      this.formGroup.controls[field].touched
    );
  }

  public getFieldError(field: string): string | null {
    if (!this.formGroup.controls[field].errors) return null;

    const errors = this.formGroup.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return `Este campo es requerido`;
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength} caracteres`;
      }
    }
    return null;
  }

  onSumitForm() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    console.log(this.formGroup.value);
  }
}
