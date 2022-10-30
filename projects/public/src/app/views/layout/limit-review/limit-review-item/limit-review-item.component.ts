import { Component, OnInit, Directive } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup ,FormControl } from '@angular/forms';
import { Lightbox } from 'ngx-lightbox';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-limit-review-item',
  templateUrl: './limit-review-item.component.html',
  styleUrls:['./limit-review-item.component.scss']
})
export class LimitReviewItemComponent implements OnInit {

  isShowRiskLimit:boolean=false;
  IscoreFileLink : string = '';
  clicked:boolean = false
  userItem!: any;
  nationalId!: [];
  userId!: string;
  natiolalIdBack: any;
  imagePathFrontNational: any;
  imagePathBackNational: any;
  imagePathFrontLicense: any;
  imagePathBackLicense: any;
  imagePathFrontClubId: any;
  imagePathBackClubId: any;
  imagePathContract: any;

  pesonalImages:any;
  allContractImages: any [] = [];
  closeResult = '';
  submitAcceptform = false;
  submitrejectform = false;
  rejectResponse :any [] = [];
  approveRiskComment : string = '';


  riskApprovedLimit :number = 0 ;
  oldRiskApprovedLimit : number = 0;
  rejectRiskComment : string = '';
  isEditRiskLimit : boolean = false;
  rejectionReason : string = ''

  imgSrc:string =''
  loading:boolean=false;


  rejectOption:string='';
  rejectComment:string='';

  rejection:FormGroup = new FormGroup({
    options:new FormControl(null,Validators.required),
    comment:new FormControl(null,Validators.required)
});

  submit: boolean = false;
  rejectionValidationForm!: FormGroup;

  constructor(
    private modalService: NgbModal,
    private _userService: UsersService,
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute,
    private router : Router,
    private lightbox: Lightbox,
    public formBuilder: FormBuilder,
    public _TranslateService:TranslateService

  ) {



  }

   ngOnInit() {
    debugger
    this.rejectionValidationForm = this.formBuilder.group({
      rejectionReason: ['', [Validators.required]],
      rejectRiskComment: ['', [Validators.required]],
 });


    this.route.params.subscribe((params) => (this.userId = params['id']));

      this._userService.getUserById(this.userId).then((res) => {

     //   console.log(d);

   //  console.log("getUserById", res);

      this.userItem = res.data;
       

      for(let i in this.userItem){
        if(this.userItem[i] === null || this.userItem[i] === ''){
               this.userItem[i] = 'N/A';
         }
      }


      if(this.userItem.riskApprovedLimit>0){
        this.riskApprovedLimit = this.userItem.riskApprovedLimit;
        this.oldRiskApprovedLimit = this.riskApprovedLimit;

      }
      else  {
        this.riskApprovedLimit = this.userItem.creditLimit;
        this.oldRiskApprovedLimit = this.riskApprovedLimit;
      }

      this.allContractImages = res.data.userDocuments;

      this.imgSrc = res.data.userDocuments[0].content;
      //console.log(res.data.userDocuments[0])
      this.pesonalImages = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,'+ res.data.personalImage
      );


    });

    this._userService.getRejectResponse().then(res=>{
      this.rejectResponse = res.data
      //console.log('res', this.rejectResponse[0].name);
    })



    // setTimeout(()=>{
    //   this.loading = false;
    // }, 6000);


  }



  openLightbox(index: number): void {
    debugger
    // open lightbox
    this.lightbox.open(this.allContractImages, index);
  }


  cpoyPDFLink(){
    this.IscoreFileLink = 'file://192.168.10.2/iscorePFDs/'+ this.userItem.nationalId +'.pdf';
    navigator.clipboard.writeText(this.IscoreFileLink);
    this.clicked = true;

    setTimeout(()=>{
      this.clicked = false;
    }, 3000);
  }
  validSubmit() {
    this.submit = true;
  }
  get form() {
    return this.rejectionValidationForm.controls;
  }

  isriskApprovedLimitChanged : boolean = false
 async editRiskLimit(cancel : boolean = false){
    debugger
    this.isEditRiskLimit =  !this.isEditRiskLimit;

    if(cancel)
     {
      this.riskApprovedLimit = this.oldRiskApprovedLimit;
      this.isriskApprovedLimitChanged = false;
      this.isEditRiskLimit = false;

      return;
    }
    if (this.isriskApprovedLimitChanged)
     {  const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger ms-2'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons
      .fire({
        title:this._TranslateService.instant('USERITEMINFO.areYouSure'),
        text: this._TranslateService.instant('USERITEMINFO.msgEidtrisk') +this.oldRiskApprovedLimit + this._TranslateService.instant('USERITEMINFO.to') +this.riskApprovedLimit,
        icon: 'warning',
        confirmButtonText: this._TranslateService.instant('USERITEMINFO.yesNoChange'),
        cancelButtonText: this._TranslateService.instant('USERITEMINFO.noRollback'),
        showCancelButton: true
      })
      .then(async result => {

        debugger
        if (result.value) {

          const data = {
            clientNationalId: this.userItem.nationalId,
            riskComment: this.approveRiskComment,
            riskApprovedLimit: this.riskApprovedLimit,
            clientStatus: true,

          };
          debugger
          await this._userService.editRiskLimit(data).subscribe((res) =>{
            if(res.status){
              this.oldRiskApprovedLimit = this.riskApprovedLimit;

          this.isriskApprovedLimitChanged =false;
          swalWithBootstrapButtons.fire({
            title:this._TranslateService.instant('USERITEMINFO.yesTitle'),
            text:this._TranslateService.instant('USERITEMINFO.yesMsg'),
            confirmButtonText:this._TranslateService.instant('USERITEMINFO.ok'),
            icon:'success'
          });

            }
          } );


        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title:this._TranslateService.instant('USERITEMINFO.rollTitle'),
            text:this._TranslateService.instant('USERITEMINFO.rollMsg'),
            confirmButtonText:this._TranslateService.instant('USERITEMINFO.ok'),
            icon:'error'
          });
          this.isEditRiskLimit =  !this.isEditRiskLimit;
          this.riskApprovedLimit = this.oldRiskApprovedLimit ;
        }
        else{
          this.isriskApprovedLimitChanged = false;
          this.riskApprovedLimit = this.oldRiskApprovedLimit ;
        }
      });}
      this.isriskApprovedLimitChanged = true;
  }
  open(content :any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {

    });
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }



  openModal(content: any) {
    debugger
    this.modalService.open(content);
  }

  showImg(index:number){
     this.imgSrc = this.allContractImages[index].content;
  }

  showSpinner(){
    this.loading = true;
  }

}
