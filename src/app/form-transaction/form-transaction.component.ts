import { Component } from '@angular/core';
import { FundService } from '../service/fund.service';
import { Fund } from '../model/fund';

@Component({
  selector: 'app-form-transaction',
  standalone: true,
  imports: [],
  templateUrl: './form-transaction.component.html',
  styleUrl: './form-transaction.component.css'
})
export class FormTransactionComponent {
  fundService: FundService;
  listFund: Fund[];

  constructor(service: FundService){
    this.fundService = service;
    this.getAll();
  }

  getAll(){
    this.fundService.getAll().subscribe(
      (data: Fund[]) => {
        this.listFund = data;
      }
    )
  }
  
}
