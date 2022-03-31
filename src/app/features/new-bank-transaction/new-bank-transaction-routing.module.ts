import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewBankTransactionComponent} from './new-bank-transaction.component';


const routes: Routes = [
  {
    path: '',
    component: NewBankTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBankTransactionRoutingModule { }
