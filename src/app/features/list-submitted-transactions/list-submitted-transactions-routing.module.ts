import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListSubmittedTransactionsComponent} from './list-submitted-transactions.component';


const routes: Routes = [
  {
    path: '',
    component: ListSubmittedTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListSubmittedTransactionsRoutingModule { }
