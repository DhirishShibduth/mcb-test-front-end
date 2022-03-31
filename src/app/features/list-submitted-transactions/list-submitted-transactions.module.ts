import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListSubmittedTransactionsRoutingModule } from './list-submitted-transactions-routing.module';
import { ListSubmittedTransactionsComponent } from './list-submitted-transactions.component';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [ListSubmittedTransactionsComponent],
  imports: [
    CommonModule,
    ListSubmittedTransactionsRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class ListSubmittedTransactionsModule { }
