import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Email } from './email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email> {

  constructor(
    private emailService: EmailService,
    private router: Router
  ) { }

  resolve( route: ActivatedRouteSnapshot ) {
    // get the ID from URL
    const { id } = route.params;

    // pass the ID the getEmail method in our EmailService and return that email
    return this.emailService.getEmail(id).pipe(
      catchError((err) => {
        this.router.navigateByUrl('/inbox/not-found');

        return EMPTY;
      })
    );
  }
}
