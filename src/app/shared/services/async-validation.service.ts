import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { Observable, delay } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AsyncValidationService implements AsyncValidator {
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = control.value;

    console.log({ email });

    return new Observable<ValidationErrors | null>((subscribe) => {
      if (email === 'dev.chaico@gmail.com') {
        subscribe.next({
          mailTaken: true,
        });
        subscribe.complete();
      }

      subscribe.next(null);
      subscribe.complete();
    }).pipe(delay(5000));
  }
}
