import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';
import { TableTransactionComponent } from './table-transaction/table-transaction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormTransactionComponent, TableTransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fund-management-amv-front';
}
