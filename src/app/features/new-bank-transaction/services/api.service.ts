import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TransformService} from './transform.service';
import {CustomerApiModel} from '../models/customer.model';

@Injectable()
export class ApiService {

  constructor(private readonly http: HttpClient, private readonly transformService: TransformService) { }

  public submitNewTransactionForm(transactionForm: CustomerApiModel): Observable<any> {
    return this.http.post(
      'http://localhost:3000/customer',
      this.transformService.uiToApiTransform(transactionForm)
    );
  }

}
