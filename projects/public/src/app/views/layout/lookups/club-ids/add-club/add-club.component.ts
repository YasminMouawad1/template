import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
})
export class AddClubComponent implements OnInit {
  clubForm!: FormGroup;
  constructor(private formBuilder: FormBuilder , private _lookUpsServices: LookUpsService , private location: Location) { }

  ngOnInit(): void {
    this.clubForm = this.formBuilder.group({
      clubName: ['', Validators.required],
      clubCode: ['', Validators.required],
     
    });

  }

  onSubmit(){
    const obj  ={
      name: this.clubForm.controls['clubName'].value,         
      code: this.clubForm.controls['clubCode'].value         
  }
//console.log(obj)
  this._lookUpsServices.addClubId(obj).subscribe(res=>{
    this.location.back();
  })
  
  }
}
