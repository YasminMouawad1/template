import { Component, OnInit } from '@angular/core';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-club-ids',
  templateUrl: './club-ids.component.html',
})
export class ClubIdsComponent implements OnInit {
clubIds!:[];
  constructor(private _lookUpsServices: LookUpsService) { }

  ngOnInit(): void {
    this._lookUpsServices.getClubIds().subscribe((res) => {
      this.clubIds = res.data;
      //console.log(this.clubIds);
    });
  }

}
