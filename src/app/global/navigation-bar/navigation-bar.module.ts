import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavigationBarComponent} from './navigation-bar.component';
import {RouterModule} from '@angular/router';
import {MatToolbarModule} from "@angular/material/toolbar";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [NavigationBarComponent],
  imports: [CommonModule, RouterModule, MatToolbarModule, _MatMenuDirectivesModule, MatMenuModule, MatIconModule],
  exports: [NavigationBarComponent]
})
export class NavigationBarModule { }
