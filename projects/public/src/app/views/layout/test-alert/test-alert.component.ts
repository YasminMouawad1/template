import { Component, OnInit } from '@angular/core';


import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-test-alert',
  templateUrl: './test-alert.component.html',
})
export class TestAlertComponent implements OnInit {

  constructor(private _notificationsService:NotificationsService) { }

  ngOnInit(): void {
  }

  onSuccess(message:string){
    this._notificationsService.success('success',message , {
       position: ['bottom', 'right'] ,
       timeout: 3000,
       animate:'fade',
       showProgressBar:true
    });
 
 } 
 

}
