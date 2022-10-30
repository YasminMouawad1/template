import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { UsersRejectComponent } from './users-reject.component';
import { UserRejectRoutingModule } from './users-reject-routing.module';
import { UserRejectedItemComponent } from './user-item/user-item.component';
import { UsersRejectedListComponent } from './users-list-rejected/users-list-rejected.component';
import { UsersListPermanentRejectedComponent } from './users-list-permanent-rejected/users-list-permanent-rejected.component';




@NgModule({
  declarations: [
    UsersRejectComponent,

    UserRejectedItemComponent,
    UsersRejectedListComponent,
    UsersListPermanentRejectedComponent

  ],
  imports: [
    CommonModule,
    UserRejectRoutingModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ]
})
export class UsersRejectModule { }
