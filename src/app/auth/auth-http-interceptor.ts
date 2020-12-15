import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true
    });
    return next.handle(modifiedReq)

    // KEEP JUST FOR SOME REFERENCE OF HOW TO LISTEN FOR DIFFERENT REQUEST TYPES
    // return next.handle(modifiedReq).pipe(
    //   tap(value => {
    //     // if the request was just sent to the server
    //     if(value.type === HttpEventType.Sent) {
    //       console.log('reqeust was sent to server')
    //     }
    //     // if it's a response from the server/API
    //     if(value.type === HttpEventType.Response) {
    //       console.log('got a response from the api', value);
    //     }
    //   })
    // )
  }
}
