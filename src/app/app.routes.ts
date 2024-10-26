import { Routes } from '@angular/router';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';
import { TableTransactionComponent } from './table-transaction/table-transaction.component';

export const routes: Routes = [
    {
        path: 'transaction',
        component: FormTransactionComponent
    },
    {
        path: 'transactions',
        component: TableTransactionComponent
    },
    {
        path: 'funds',
        component: TableTransactionComponent
    }
];
