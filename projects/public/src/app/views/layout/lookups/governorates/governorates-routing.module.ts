import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GovernoratesComponent } from './governorates.component';

const routes: Routes = [{ path: '', component: GovernoratesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GovernoratesRoutingModule { }
