/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AddressDto } from '../../models/address-dto';

export interface FindById3$Params {
  addressId: number;
}

export function findById3(http: HttpClient, rootUrl: string, params: FindById3$Params, context?: HttpContext): Observable<StrictHttpResponse<AddressDto>> {
  const rb = new RequestBuilder(rootUrl, findById3.PATH, 'get');
  if (params) {
    rb.path('addressId', params.addressId, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AddressDto>;
    })
  );
}

findById3.PATH = '/addresses/{address-id}';
