import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppInterceptor implements AppInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      headers: new HttpHeaders({
        'accept': 'application/json',
        'Content-Type': 'application/json'
        }
      )
    });
    return next.handle(clonedReq);
  }
}
