import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage.component';
import {MainComponent} from './ui/main/main.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [{
      path: '',
      component: MainComponent,
    },
      {
        path: 'new-bank-transaction',
        loadChildren: () =>
          import('../new-bank-transaction/new-bank-transaction.module').then(
            (m) => m.NewBankTransactionModule
          ),
      },
      {
        path: 'list-submitted-transactions',
        loadChildren: () =>
          import('../list-submitted-transactions/list-submitted-transactions.module').then(
            (m) => m.ListSubmittedTransactionsModule
          ),
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
