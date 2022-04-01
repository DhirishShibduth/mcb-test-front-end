import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {GenericValidators} from '../../global/custom-validators/validators';
import {VALIDATION_REGEX} from '../../global/custom-validators/validators.enum';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.scss']
})
export class MultiFormComponent implements OnInit {

  arrayForm = this.fb.group({
    forms: this.fb.array([])
  });

  groupForm = this.fb.group({
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

  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.addForm();
    console.log(this.forms.controls[0]);
  }

  get forms() {
    return this.arrayForm.controls.forms as FormArray;
  }

  addForm() {
    this.forms.push(this.groupForm);
  }

}
