import { Routes } from '@angular/router';
import { FormTransactionComponent } from './form-transaction/form-transaction.component';
import { TableTransactionComponent } from './table-transaction/table-transaction.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormCancellationComponent } from './form-cancellation/form-cancellation.component';

export const routes: Routes = [
    {
        path: 'opening',
        component: FormTransactionComponent
    },
    {
        path: 'transactions',
        component: TableTransactionComponent
    },
    {
        path: 'cancellation',
        component: FormCancellationComponent
    },
    {
        path: '',
        component: UserDetailComponent
    }
];
