import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GenericValidators} from '../../global/custom-validators/validators';
import {VALIDATION_REGEX} from '../../global/custom-validators/validators.enum';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-new-bank-transaction',
  templateUrl: './new-bank-transaction.component.html',
  styleUrls: ['./new-bank-transaction.component.scss']
})
export class NewBankTransactionComponent implements OnInit {

  public newBankForm: FormGroup;
  private customerData;

  constructor(private readonly formBuilder: FormBuilder, private http: HttpClient, private readonly apiService: ApiService) {
    this.getJSON().subscribe(data => {
      this.customerData = data;
    });
  }

  ngOnInit(): void {
    this.initNewBankForm();
  }

  private initNewBankForm(): void {
    this.newBankForm = this.formBuilder.group({
      options: ['new', [Validators.required]],
      reference: ['', [Validators.required]],
      customerNumber: ['', [Validators.required]],
      customerName: ['', [Validators.required]],
      customerAddress: ['', [Validators.required]],
      customerPhone: ['', [Validators.required, GenericValidators(VALIDATION_REGEX.NUMBER_ONLY, 'numOnlyError')]],
      transferAmount: ['', [Validators.required, GenericValidators(VALIDATION_REGEX.NUMBER_ONLY, 'numOnlyError')]],
      transferCurrency: ['mur', [Validators.required]],
      beneficiaryBank: ['', [Validators.required, GenericValidators(VALIDATION_REGEX.CHARACTERS_ONLY, 'CharOnlyError')]],
      beneficiaryAccNo: ['', [Validators.required]],
      paymentDetails: ['', [Validators.required, GenericValidators(VALIDATION_REGEX.CHARACTERS_ONLY, 'CharOnlyError')]],
      creditDebitDetails: ['', [Validators.required]],
      region: ['', [Validators.required]]
    });
  }

  public prefill(): void {
    if (this.newBankForm.get('customerNumber').valid){
      const customerInfo = this.customerData.responseXML.getCustomerInfoResponse.getCustomerInfoResult.CUST_INFO;
      if (this.newBankForm.get('customerNumber').value === customerInfo.CUST_NO){
       this.newBankForm.get('customerName').setValue(customerInfo.SHORT_NAME);
       this.newBankForm.get('customerAddress').setValue(customerInfo.STREET_ADDR);
       this.newBankForm.get('customerPhone').setValue(customerInfo.CONTACT_INFO_V7.CONTACT_INFO_V7.PHONE_LIST_V7.PHONE_LIST_ITEM_V7.PHONE);
     } else {
        this.newBankForm.get('customerName').setValue('');
        this.newBankForm.get('customerAddress').setValue('');
        this.newBankForm.get('customerPhone').setValue('');
      }
    }
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/customer.json');
  }

  public submitNewBankTransaction(): void {
    console.log(this.newBankForm);
    const customerData = this.newBankForm.getRawValue();
    customerData.id = this.newBankForm.get('customerNumber').value;
    this.apiService.submitNewTransactionForm(customerData).subscribe((data) => {
      console.log(data);
    });
  }
}
