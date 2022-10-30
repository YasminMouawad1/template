import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LookUpsService } from 'projects/public/src/app/shared/services/endpoints/look-ups.service';

@Component({
  selector: 'app-add-car-brand',
  templateUrl: './add-car-brand.component.html',
})
export class AddCarBrandComponent implements OnInit {
  carBrandForm!: FormGroup;
  carModelForm!:FormGroup;
  AllCarBrand: any[] = [];
  constructor(private formBuilder: FormBuilder , 
    private _lookUpsServices: LookUpsService , private location: Location) { }

      /**  
   * @param  itemType // For make a dynamic Form 
   * it Can Be init | classRoom | subject 
   * @returns FormGroup
  */
  ngOnInit(): void {
    this.carBrandForm =  this.createFormItem('init');

    this.carModelForm = this.formBuilder.group({
      name: ['', Validators.required],
      brandId: [ Validators.required],
      code: ['', Validators.required],
     
    });

    this._lookUpsServices.getCarBrands().subscribe(res=>{
      this.AllCarBrand = res.data;
      //console.log(this.AllCarBrand);
    })
  }

  /* Create Form Item */ 
  createFormItem(itemType:string):FormGroup{
    let formItem = this.formBuilder.group({})
    switch (itemType) {
      case 'init':
        formItem = this.formBuilder.group({
          name: '',
          code: '',
          carModelModels: this.formBuilder.array([])
        })
        break;
        case 'carModelModel':
          formItem = this.formBuilder.group({
            name: '',
            brandId:'',
          
          
          })
          break;
          
    }
    return formItem;
  }

   /* Get Class Room */
   getCarModel():FormArray{
    return this.carBrandForm.get('carModelModels') as FormArray;
  }

  /* Add Class Room */
  addCarModel(){
    this.getCarModel().push(this.createFormItem('carModelModel'))
  }
  /* Delete Class Room */
  deleteCarModel(carModelIndex:number){
    this.getCarModel().removeAt(carModelIndex)
  }
  onSubmit(){
   //console.log(this.carBrandForm.value);
  this._lookUpsServices.addCarBrand(this.carBrandForm.value).subscribe(res=>{
    this.location.back();
  })
  
  }

  onSubmitModel(){
    const obj  ={
      name: this.carModelForm.controls['name'].value,     
      brandId: this.carModelForm.controls['brandId'].value,         
      code: this.carModelForm.controls['code'].value         
  }

  this._lookUpsServices.addCarModel(obj).subscribe(res=>{
    this.location.back()
  })

 // console.log(obj)
  }

}
