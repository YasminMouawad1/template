import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploymentTypesComponent } from './employment-types.component';

const routes: Routes = [{ path: '', component: EmploymentTypesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploymentTypesRoutingModule { }
