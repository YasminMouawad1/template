import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GovernoratesRoutingModule } from './governorates-routing.module';
import { GovernoratesComponent } from './governorates.component';


@NgModule({
  declarations: [
    GovernoratesComponent
  ],
  imports: [
    CommonModule,
    GovernoratesRoutingModule
  ]
})
export class GovernoratesModule { }
