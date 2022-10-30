import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SpinnerService } from 'projects/public/src/app/shared/services/endpoints/spinner.service';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-limit-review-list',
  templateUrl: './limit-review-list.component.html',
  styleUrls:['./limit-review-list.component.scss']
})
export class LimitReviewListComponent implements OnInit {

  usersList: any[] = [];

  numberRows:number = 10;
  currentPage: number = 1;
showTable :boolean = false;
// personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer,private _spinnerService: SpinnerService) { }


 async ngOnInit() {
  this._spinnerService.requestStarted();
   await this._userService.getLimitReviw().then(res => {
      
      if(res.data != null)
        this.usersList = res.data ;
        this.showTable = this.usersList?.length == 0 ?false : true

           //console.log(this.usersList)


          //  this.personalImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
          //  + res.data.result.personalImage);
    this._spinnerService.requestEnded();

    })}

  

}
