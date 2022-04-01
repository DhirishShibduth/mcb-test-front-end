import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultiFormRoutingModule } from './multi-form-routing.module';
import { MultiFormComponent } from './multi-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [MultiFormComponent],
  imports: [
    CommonModule,
    MultiFormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class MultiFormModule { }
