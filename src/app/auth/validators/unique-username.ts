import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) { }

  validate = (control: FormControl) => {
    // get value from the input element
    const { value } = control;
    // send post request to api to check username
    return this.authService.usernameAvailable(value).pipe(
      map((value) => {
        // if the username is ok to use return null so Angular is happy
        if(value.available) return null;
      }),
      catchError((err) => {
        // if there is an error handle it!
        if(err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  }
}
