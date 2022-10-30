import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list-rejected.component.html',
  styleUrls: ['./users-list-rejected.component.scss']
})
export class UsersRejectedListComponent implements OnInit {
usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
  showTable :boolean = false;
// personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer) { }

 async ngOnInit() {
    debugger
    await this._userService.getRiskRejectedProfileList().then(res => {

     if(res.data != null)
       this.usersList = res.data ;
            
           this.showTable = this.usersList.length == 0 ?false : true
          //  this.personalImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          //  + res.data.result.personalImage);


    }
      )

  }

}
