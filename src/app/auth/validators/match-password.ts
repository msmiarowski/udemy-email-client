import { Injectable } from '@angular/core';
import { Validator, FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  validate(formGroup: FormGroup) {
    const { password, passwordConfirmation } = formGroup.value;

    if(password === passwordConfirmation) {
      // return null if password matches the confirmation
      return null;
    } else {
      // return an error
      // this object is returned to the errors object on our FormControl back in our form
      return { passwordsDontMatch: true }
    }
  }
}
