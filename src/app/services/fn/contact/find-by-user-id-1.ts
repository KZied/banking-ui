/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactDto } from '../../models/contact-dto';

export interface FindByUserId1$Params {
  'user-id': number;
}

export function findByUserId1(http: HttpClient, rootUrl: string, params: FindByUserId1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
  const rb = new RequestBuilder(rootUrl, findByUserId1.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContactDto>>;
    })
  );
}

findByUserId1.PATH = '/contacts/users/user-id';
