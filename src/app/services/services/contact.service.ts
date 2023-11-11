/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ContactDto } from '../models/contact-dto';
import { delete2 } from '../fn/contact/delete-2';
import { Delete2$Params } from '../fn/contact/delete-2';
import { findAll2 } from '../fn/contact/find-all-2';
import { FindAll2$Params } from '../fn/contact/find-all-2';
import { findById2 } from '../fn/contact/find-by-id-2';
import { FindById2$Params } from '../fn/contact/find-by-id-2';
import { findByUserId1 } from '../fn/contact/find-by-user-id-1';
import { FindByUserId1$Params } from '../fn/contact/find-by-user-id-1';
import { save2 } from '../fn/contact/save-2';
import { Save2$Params } from '../fn/contact/save-2';

@Injectable({ providedIn: 'root' })
export class ContactService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll2()` */
  static readonly FindAll2Path = '/contacts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2$Response(params?: FindAll2$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
    return findAll2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll2(params?: FindAll2$Params, context?: HttpContext): Observable<Array<ContactDto>> {
    return this.findAll2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>): Array<ContactDto> => r.body)
    );
  }

  /** Path part for operation `save2()` */
  static readonly Save2Path = '/contacts/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save2()` instead.
   *
   * This method doesn't expect any request body.
   */
  save2$Response(params: Save2$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  save2(params: Save2$Params, context?: HttpContext): Observable<number> {
    return this.save2$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById2()` */
  static readonly FindById2Path = '/contacts/{contact-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById2()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2$Response(params: FindById2$Params, context?: HttpContext): Observable<StrictHttpResponse<ContactDto>> {
    return findById2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById2(params: FindById2$Params, context?: HttpContext): Observable<ContactDto> {
    return this.findById2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ContactDto>): ContactDto => r.body)
    );
  }

  /** Path part for operation `delete2()` */
  static readonly Delete2Path = '/contacts/{contact-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2$Response(params: Delete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete2(params: Delete2$Params, context?: HttpContext): Observable<void> {
    return this.delete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `findByUserId1()` */
  static readonly FindByUserId1Path = '/contacts/users/user-id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByUserId1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId1$Response(params: FindByUserId1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
    return findByUserId1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByUserId1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId1(params: FindByUserId1$Params, context?: HttpContext): Observable<Array<ContactDto>> {
    return this.findByUserId1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ContactDto>>): Array<ContactDto> => r.body)
    );
  }

}
