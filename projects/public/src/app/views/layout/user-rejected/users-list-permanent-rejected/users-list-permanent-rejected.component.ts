import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-users-list-permanent-rejected',
  templateUrl: './users-list-permanent-rejected.component.html',
})
export class UsersListPermanentRejectedComponent implements OnInit {
  usersList: any[] = [];
  showTable :boolean = false;
  numberRows:number = 10;
  currentPage: number = 1;

// personalImg: any;
  constructor(private _userService: UsersService ,private _spinnerService: SpinnerService) { }

 async ngOnInit() {
  this._spinnerService.requestStarted();
    debugger

    await this._userService.getRiskPermanentRejectedProfileList().then(res => { 
     this._spinnerService.requestEnded();
     if(res.data != null){
      this.usersList = res.data ; 
      this.showTable = this.usersList.length == 0 ? false : true
      
     }
      

 
    },(error) => {
      this._spinnerService.requestEnded();
    }
      )

      this._spinnerService.requestEnded();

  }

}
