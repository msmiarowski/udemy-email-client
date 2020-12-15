import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { EmailService } from '../email.service';
// import { switchMap } from 'rxjs/operators';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css']
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(
    private route: ActivatedRoute,
    // private emailService: EmailService
  ) {
    this.route.data.subscribe(({ email }) => {
      // get the email and assign it to our local property
      this.email = email;
    })
  }

  ngOnInit() {
    // we don't need this stuff any more as we moved this logic to our resolver.
    // I'm keeping it for documentation purposes

    // this.route.params.pipe(
    //   switchMap(({ id }) => {
    //     return this.emailService.getEmail(id);
    //   })
    // ).subscribe((email) => {
    //   this.email = email;
    // });
  }

}
