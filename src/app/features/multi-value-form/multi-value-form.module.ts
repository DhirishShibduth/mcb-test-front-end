import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiValueFormRoutingModule } from './multi-value-form-routing.module';
import { MultiValueFormComponent } from './multi-value-form.component';


@NgModule({
  declarations: [MultiValueFormComponent],
  imports: [
    CommonModule,
    MultiValueFormRoutingModule
  ]
})
export class MultiValueFormModule { }
