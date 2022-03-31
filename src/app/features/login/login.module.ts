import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatCardModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class LoginModule { }
