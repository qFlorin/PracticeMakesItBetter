import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export function germanLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const germanLettersPattern = /^[A-Za-zÄäÖöÜüß]*$/;
    const valid = germanLettersPattern.test(control.value);
    return valid ? null : { germanLetters: { value: control.value } };
  };
}

export function zipCodeValidatorFn(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { required: true };
    }
    return control.value.length < 5
      ? { minlength: { requiredLength: 5, actualLength: control.value.length } }
      : null;
  };
}

export function specificNamesValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return { required: true };
    }
    const allowedNames = ['John', 'Anna', 'Thea'];
    const valid = allowedNames.includes(control.value);
    return valid ? null : { specificNames: { value: control.value } };
  };
}

@Injectable({ providedIn: 'root' })
export class PhoneNumberValidator implements AsyncValidator {
  constructor(private http: HttpClient) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.value) {
      return of({ required: true });
    }

    return this.http
      .get<{ valid: boolean }>(
        `https://api.example.com/validate-phone/${control.value}`
      )
      .pipe(
        map((response) =>
          response.valid
            ? null
            : { invalidPhoneNumber: { value: control.value } }
        ),
        catchError(() => of({ invalidPhoneNumber: { value: control.value } }))
      );
  }
}

// @Injectable({ providedIn: 'root' })
// export class UniqueRoleValidator implements AsyncValidator {
//   constructor(private actorsService: ActorsService) {}
//   validate(control: AbstractControl): Observable<ValidationErrors | null> {
//     return this.actorsService.isRoleTaken(control.value).pipe(
//       map((isTaken) => (isTaken ? { uniqueRole: true } : null)),
//       catchError(() => of(null))
//     );
//   }
// }
