/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AuthenticationResponse } from '../../models/authentication-response';
import { UserDto } from '../../models/user-dto';

export interface Register$Params {
      body: UserDto
}

export function register(http: HttpClient, rootUrl: string, params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
  const rb = new RequestBuilder(rootUrl, register.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AuthenticationResponse>;
    })
  );
}

register.PATH = '/auth/register';
