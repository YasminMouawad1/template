import { Component, OnInit } from '@angular/core';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-employment-types',
  templateUrl: './employment-types.component.html',
})
export class EmploymentTypesComponent implements OnInit {
  employmentTypes!: any[];

  constructor(private _lookUpsServices: LookUpsService) { }

  ngOnInit(): void {
    this._lookUpsServices.getEmploymentTypes().subscribe((res) => {
      this.employmentTypes = res.data;
    });
  }

}
