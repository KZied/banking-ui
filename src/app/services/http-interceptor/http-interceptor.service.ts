import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJvdWhvdWhAZ21haWwuY29tIiwiZXhwIjoxNzAwNDMxMjE4LCJpYXQiOjE2OTk3MTEyMTgsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV19.dux1s50-VjZjAmMd5K_8yBobMKBfAWW5K0W-j7jg4m4';
    if (token !== undefined && token !== null){
      // assign the token;
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return  next.handle(authReq);
    }
    return next.handle(req);
  }
}
