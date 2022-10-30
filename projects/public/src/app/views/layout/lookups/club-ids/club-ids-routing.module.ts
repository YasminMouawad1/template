import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClubComponent } from './add-club/add-club.component';
import { ClubIdsComponent } from './club-ids.component';

const routes: Routes = [
  { path: '', component: ClubIdsComponent },
  { path: 'add', component: AddClubComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClubIdsRoutingModule { }
