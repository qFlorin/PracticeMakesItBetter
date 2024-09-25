import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function germanLettersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const germanLettersPattern = /^[A-Za-zÄäÖöÜüß]*$/;
    const valid = germanLettersPattern.test(control.value);
    return valid ? null : { germanLetters: { value: control.value } };
  };
}
