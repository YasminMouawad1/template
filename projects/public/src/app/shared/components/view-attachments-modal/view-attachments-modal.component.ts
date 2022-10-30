import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'view-attachments-modal',
  templateUrl: './view-attachments-modal.component.html'
})
export class ViewAttachmentsModalComponent {

  attachment! : any;

  
  constructor(public activeModal: NgbActiveModal, public modalService: NgbModal) {}

  ngOnInit() {
     this.attachment = this.modalService.activeInstances.arguments.attachment;
  }


}
