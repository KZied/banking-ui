import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0dGVzdEBnbWFpbC5jb20iLCJleHAiOjE3MDIzMzQ0NTcsImlhdCI6MTcwMTYxNDQ1NywiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XX0.QFgX6EtXXN6aiCcZHT6TmpiCZ6RR-aM_5dtxba8cXu8';
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
