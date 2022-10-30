import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarBrandRoutingModule } from './car-brand-routing.module';
import { CarBrandComponent } from './car-brand.component';
import { AddCarBrandComponent } from './add-car-brand/add-car-brand.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarBrandComponent,
    AddCarBrandComponent
  ],
  imports: [
    CommonModule,
    CarBrandRoutingModule, 
    ReactiveFormsModule
  ]
})
export class CarBrandModule { }
