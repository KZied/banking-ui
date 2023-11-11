/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { delete1 } from '../fn/transaction-controller/delete-1';
import { Delete1$Params } from '../fn/transaction-controller/delete-1';
import { findAll1 } from '../fn/transaction-controller/find-all-1';
import { FindAll1$Params } from '../fn/transaction-controller/find-all-1';
import { findById1 } from '../fn/transaction-controller/find-by-id-1';
import { FindById1$Params } from '../fn/transaction-controller/find-by-id-1';
import { findByUserId } from '../fn/transaction-controller/find-by-user-id';
import { FindByUserId$Params } from '../fn/transaction-controller/find-by-user-id';
import { save1 } from '../fn/transaction-controller/save-1';
import { Save1$Params } from '../fn/transaction-controller/save-1';
import { TransactionDto } from '../models/transaction-dto';

@Injectable({ providedIn: 'root' })
export class TransactionControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll1()` */
  static readonly FindAll1Path = '/transactions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1$Response(params?: FindAll1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionDto>>> {
    return findAll1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll1(params?: FindAll1$Params, context?: HttpContext): Observable<Array<TransactionDto>> {
    return this.findAll1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TransactionDto>>): Array<TransactionDto> => r.body)
    );
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/transactions/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<number> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById1()` */
  static readonly FindById1Path = '/transactions/{transaction-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById1()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1$Response(params: FindById1$Params, context?: HttpContext): Observable<StrictHttpResponse<TransactionDto>> {
    return findById1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById1(params: FindById1$Params, context?: HttpContext): Observable<TransactionDto> {
    return this.findById1$Response(params, context).pipe(
      map((r: StrictHttpResponse<TransactionDto>): TransactionDto => r.body)
    );
  }

  /** Path part for operation `findByUserId()` */
  static readonly FindByUserIdPath = '/transactions/users/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId$Response(params: FindByUserId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionDto>>> {
    return findByUserId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByUserId(params: FindByUserId$Params, context?: HttpContext): Observable<Array<TransactionDto>> {
    return this.findByUserId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TransactionDto>>): Array<TransactionDto> => r.body)
    );
  }

  /** Path part for operation `delete1()` */
  static readonly Delete1Path = '/transactions/transaction-id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1$Response(params: Delete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return delete1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `delete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete1(params: Delete1$Params, context?: HttpContext): Observable<void> {
    return this.delete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
