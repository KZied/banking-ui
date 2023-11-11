/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findSumTransactionsByDate } from '../fn/statistics/find-sum-transactions-by-date';
import { FindSumTransactionsByDate$Params } from '../fn/statistics/find-sum-transactions-by-date';
import { getAccountBalance } from '../fn/statistics/get-account-balance';
import { GetAccountBalance$Params } from '../fn/statistics/get-account-balance';
import { highestDeposit } from '../fn/statistics/highest-deposit';
import { HighestDeposit$Params } from '../fn/statistics/highest-deposit';
import { highestTransfer } from '../fn/statistics/highest-transfer';
import { HighestTransfer$Params } from '../fn/statistics/highest-transfer';
import { TransactionSumDetails } from '../models/transaction-sum-details';

@Injectable({ providedIn: 'root' })
export class StatisticsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findSumTransactionsByDate()` */
  static readonly FindSumTransactionsByDatePath = '/statistics/sum-by-date/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSumTransactionsByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTransactionsByDate$Response(params: FindSumTransactionsByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionSumDetails>>> {
    return findSumTransactionsByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSumTransactionsByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTransactionsByDate(params: FindSumTransactionsByDate$Params, context?: HttpContext): Observable<Array<TransactionSumDetails>> {
    return this.findSumTransactionsByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TransactionSumDetails>>): Array<TransactionSumDetails> => r.body)
    );
  }

  /** Path part for operation `highestTransfer()` */
  static readonly HighestTransferPath = '/statistics/highest-transfer/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highestTransfer()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestTransfer$Response(params: HighestTransfer$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highestTransfer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highestTransfer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestTransfer(params: HighestTransfer$Params, context?: HttpContext): Observable<number> {
    return this.highestTransfer$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `highestDeposit()` */
  static readonly HighestDepositPath = '/statistics/highest-deposit/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highestDeposit()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestDeposit$Response(params: HighestDeposit$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highestDeposit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highestDeposit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highestDeposit(params: HighestDeposit$Params, context?: HttpContext): Observable<number> {
    return this.highestDeposit$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAccountBalance()` */
  static readonly GetAccountBalancePath = '/statistics/account-balance/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountBalance()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalance$Response(params: GetAccountBalance$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getAccountBalance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountBalance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalance(params: GetAccountBalance$Params, context?: HttpContext): Observable<number> {
    return this.getAccountBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
