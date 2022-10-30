import { Component, OnInit } from '@angular/core';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-governorates',
  templateUrl: './governorates.component.html',
})
export class GovernoratesComponent implements OnInit {
  governorates!: any[];

  constructor(private _lookUpsServices: LookUpsService) { }

  ngOnInit(): void {
    this._lookUpsServices.getGovernorates().subscribe((res) => {
      this.governorates = res.data;
    });
  }

}
