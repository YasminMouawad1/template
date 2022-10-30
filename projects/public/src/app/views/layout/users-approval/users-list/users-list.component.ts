import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
showTable :boolean = false;
// personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }


 async ngOnInit() {
  this._spinnerService.requestStarted();
   await this._userService.getWaitingRiskApprovalList().then(res => {
     
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList.length == 0 ?false : true;

        this._spinnerService.requestEnded();
           //console.log(this.usersList)


          //  this.personalImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          //  + res.data.result.personalImage);


    })}




}
