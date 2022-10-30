import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubIdsRoutingModule } from './club-ids-routing.module';
import { ClubIdsComponent } from './club-ids.component';
import { AddClubComponent } from './add-club/add-club.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClubIdsComponent,
    AddClubComponent
  ],
  imports: [
    CommonModule,
    ClubIdsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClubIdsModule { }
