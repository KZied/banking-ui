import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../../services/services/transaction.service";
import {TransactionDto} from "../../services/models/transaction-dto";
import {HelperService} from "../../services/helper/helper.service";

@Component({
  selector: 'app-my-transactions',
  templateUrl: './my-transactions.component.html',
  styleUrls: ['./my-transactions.component.scss']
})
export class MyTransactionsComponent implements OnInit {

  transactions: Array<TransactionDto> = [];

  constructor(
    private transactionService: TransactionService,
    private helperService: HelperService
  ) {
  }

  ngOnInit(): void {
    this.transactionService.findByUserId({
      'user-id': this.helperService.userId
    }).subscribe({
      next: (data) => {
        this.transactions = data;
      }
    });
  }

}
