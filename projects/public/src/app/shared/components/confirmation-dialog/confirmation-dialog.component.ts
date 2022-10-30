import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html'
})
export class ConfirmationDialogComponent {

  headTitle = '';
  title = '';
  desc = '';
  okBtn = '';
  cancelBtn = '';
  
  constructor(public activeModal: NgbActiveModal, public modalService: NgbModal) {}

  ngOnInit() {
     this.headTitle = this.modalService.activeInstances.arguments.headTitle;
     this.title = this.modalService.activeInstances.arguments.title;
     this.desc = this.modalService.activeInstances.arguments.desc;
     this.okBtn = this.modalService.activeInstances.arguments.okBtn;
     this.cancelBtn = this.modalService.activeInstances.arguments.cancelBtn;
  }


}
