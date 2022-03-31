import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {TransactionsApiModel} from './models/transactions.model';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list-submitted-transactions',
  templateUrl: './list-submitted-transactions.component.html',
  styleUrls: ['./list-submitted-transactions.component.scss']
})
export class ListSubmittedTransactionsComponent implements OnInit{

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private readonly http: HttpClient) { }
  displayedColumns: string[] =  ['customerName', 'transferAmount', 'transferCurrency', 'reference'];
  dataSource: MatTableDataSource<TransactionsApiModel>;


  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/customer').subscribe(response => {
      const transactionsList: TransactionsApiModel[] = response;
      this.dataSource = new MatTableDataSource(transactionsList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
