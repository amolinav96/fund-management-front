import { Component } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-table-transaction',
  standalone: true,
  imports: [],
  templateUrl: './table-transaction.component.html',
  styleUrl: './table-transaction.component.css'
})
export class TableTransactionComponent {
  transactionService: TransactionService;
  listTransaction: Transaction[];

  constructor(service: TransactionService){
    this.transactionService = service;
    this.getAllTransactions();
  }

  getAllTransactions(){
    this.transactionService.getAllByUserId().subscribe(
      (data: Transaction[]) => {
        this.listTransaction = data;
      }
    )
  }
}
