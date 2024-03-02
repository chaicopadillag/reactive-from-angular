import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValiationService {
  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  canBeStrider = (control: FormControl) => {
    const value = control.value.trim().toLowerCase();

    if (value === 'strider') {
      return {
        strider: true,
      };
    }
    return null;
  };

  isInValidField(form: FormGroup, field: string) {
    return form.controls[field].errors && form.controls[field].touched;
  }

  isFieldOneEqualFieldTwo(fieldOne: string, fieldTwo: string) {
    return (formFroup: FormGroup) => {
      const fieldValueOne = formFroup.get(fieldOne)?.value;
      const fieldValueTwo = formFroup.get(fieldTwo)?.value;

      if (fieldValueOne !== fieldValueTwo) {
        formFroup.get(fieldTwo)?.setErrors({ notEqual: true });
        return { notEqual: true };
      }
      formFroup.get(fieldTwo)?.setErrors(null);
      return null;
    };
  }
}
