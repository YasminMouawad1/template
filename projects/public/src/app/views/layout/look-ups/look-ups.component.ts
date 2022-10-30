import { Component, OnInit } from '@angular/core';
import { LookUpsService } from '../../../shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-look-ups',
  templateUrl: './look-ups.component.html',
})
export class LookUpsComponent implements OnInit {
  carLookUps!: any[];
  governorates!: any[];
  employmentTypes!: any[];
  constructor(private _lookUpsServices: LookUpsService) {}

  ngOnInit(): void {
    this._lookUpsServices.getCarBrands().subscribe((res) => {
      this.carLookUps = res.data;
      //console.log(this.carLookUps);
    });

    this._lookUpsServices.getGovernorates().subscribe((res) => {
      this.governorates = res.data;
    });

    this._lookUpsServices.getEmploymentTypes().subscribe((res) => {
      this.employmentTypes = res.data;
    });
  }
}
