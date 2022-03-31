import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewBankTransactionRoutingModule } from './new-bank-transaction-routing.module';
import { NewBankTransactionComponent } from './new-bank-transaction.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './services/api.service';
import {TransformService} from './services/transform.service';


@NgModule({
  declarations: [NewBankTransactionComponent],
  imports: [
    CommonModule,
    NewBankTransactionRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, TransformService]
})
export class NewBankTransactionModule { }
