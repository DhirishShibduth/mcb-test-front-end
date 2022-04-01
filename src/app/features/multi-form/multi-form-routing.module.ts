import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MultiFormComponent} from './multi-form.component';


const routes: Routes = [{
  path: '',
  component: MultiFormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultiFormRoutingModule { }
