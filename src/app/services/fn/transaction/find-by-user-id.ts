/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TransactionDto } from '../../models/transaction-dto';

export interface FindByUserId$Params {
  'user-id': number;
}

export function findByUserId(http: HttpClient, rootUrl: string, params: FindByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionDto>>> {
  const rb = new RequestBuilder(rootUrl, findByUserId.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TransactionDto>>;
    })
  );
}

findByUserId.PATH = '/transactions/users/{user-id}';
