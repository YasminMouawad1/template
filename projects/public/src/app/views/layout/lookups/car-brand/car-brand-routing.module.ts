import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarBrandComponent } from './add-car-brand/add-car-brand.component';
import { CarBrandComponent } from './car-brand.component';

const routes: Routes = [
  { path: '', component: CarBrandComponent },
  { path: 'add', component: AddCarBrandComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarBrandRoutingModule { }
