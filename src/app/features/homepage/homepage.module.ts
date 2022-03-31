import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import {NavigationBarModule} from '../../global/navigation-bar/navigation-bar.module';
import { MainComponent } from './ui/main/main.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [HomepageComponent, MainComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    NavigationBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomepageModule { }
