import { Component, OnInit } from '@angular/core';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
})
export class CarBrandComponent implements OnInit {
  carLookups!: any[];

  constructor(private _lookUpsServices: LookUpsService) { }

  ngOnInit(): void {
    this._lookUpsServices.getCarBrands().subscribe((res) => {
      this.carLookups = res.data;
      //console.log(this.carLookups);
    });

  }

}
