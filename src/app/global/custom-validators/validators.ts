import {AbstractControl, ValidatorFn} from '@angular/forms';
import {VALIDATION_REGEX} from './validators.enum';

export const GenericValidators =
  (regex: string | VALIDATION_REGEX, errorCode: string): ValidatorFn =>
    (control: AbstractControl): { [key: string]: any } | null => {
      const errorValidator =
        new RegExp(regex).test(control.value);
      return errorValidator ? null : {[errorCode]: true};
    };
