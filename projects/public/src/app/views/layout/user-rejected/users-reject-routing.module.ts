import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRejectedItemComponent } from './user-item/user-item.component';
import { UsersListPermanentRejectedComponent } from './users-list-permanent-rejected/users-list-permanent-rejected.component';


import { UsersRejectedListComponent } from './users-list-rejected/users-list-rejected.component';
import { UsersRejectComponent } from './users-reject.component';


const routes: Routes = [
    { path: '', component: UsersRejectComponent  , children: [
     { path: '', component: UsersRejectedListComponent },
     //{ path: '**', component: UsersRejectedListComponent },
    { path: 'user-item/:id', component: UserRejectedItemComponent },
    { path: 'permanent-rejected', component: UsersListPermanentRejectedComponent },

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRejectRoutingModule { }
