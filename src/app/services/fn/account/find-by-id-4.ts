/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountDto } from '../../models/account-dto';

export interface FindById4$Params {
  accountId: number;
}

export function findById4(http: HttpClient, rootUrl: string, params: FindById4$Params, context?: HttpContext): Observable<StrictHttpResponse<AccountDto>> {
  const rb = new RequestBuilder(rootUrl, findById4.PATH, 'get');
  if (params) {
    rb.path('accountId', params.accountId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AccountDto>;
    })
  );
}

findById4.PATH = '/accounts/{account-id}';
