import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmploymentTypesRoutingModule } from './employment-types-routing.module';
import { EmploymentTypesComponent } from './employment-types.component';


@NgModule({
  declarations: [
    EmploymentTypesComponent
  ],
  imports: [
    CommonModule,
    EmploymentTypesRoutingModule
  ]
})
export class EmploymentTypesModule { }
