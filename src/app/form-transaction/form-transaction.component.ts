import { Component } from '@angular/core';
import { FundService } from '../service/fund.service';
import { Fund } from '../model/fund';
import { TransactionService } from '../service/transaction.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-transaction',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './form-transaction.component.html',
  styleUrl: './form-transaction.component.css'
})
export class FormTransactionComponent {
  transactionForm: FormGroup;
  fundService: FundService;
  transactionService: TransactionService;
  listFund: Fund[];

  constructor(private fb: FormBuilder, service: FundService, transaction: TransactionService) {
    this.fundService = service;
    this.transactionService = transaction;
    this.getAll();
    this.transactionForm = this.fb.group({
      initialValue: ['', Validators.required],
      fundId: ['', Validators.required]
    });
  }

  getAll() {
    this.fundService.getAll().subscribe(
      (data: Fund[]) => {
        this.listFund = data;
      }
    )
  }

  createTransaction() {
    if (this.transactionForm.valid) {
      const transactionData = {
        userId: '6701771a358f08cadb718c57', 
        fundId: this.transactionForm.value.fundId,
        transactionType: 'OPENING',
        initialValue: this.transactionForm.value.initialValue
      };

      this.transactionService.createTransaction(transactionData).subscribe(
        (response: any) => {
          alert(response.message);
        },
        (error) => {
          alert('Hubo un error en la transacción.');
        }
      );
    } else {
      alert('Por favor, completa el formulario.');
    }
  }
}
