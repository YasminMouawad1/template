import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LookUpsComponent } from './look-ups.component';

const routes: Routes = [{ path: '', component: LookUpsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LookUpsRoutingModule { }
