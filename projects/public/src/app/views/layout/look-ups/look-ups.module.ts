import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LookUpsRoutingModule } from './look-ups-routing.module';
import { LookUpsComponent } from './look-ups.component';


@NgModule({
  declarations: [
    LookUpsComponent
  ],
  imports: [
    CommonModule,
    LookUpsRoutingModule
  ]
})
export class LookUpsModule { }
