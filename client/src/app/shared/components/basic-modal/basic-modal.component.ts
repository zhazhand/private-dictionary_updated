import { Component, TemplateRef } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ConnectComponentsService } from '../../services/connect-components.service';

@Component({
  selector: 'app-basic-modal',
  templateUrl: './basic-modal.component.html',
  styleUrls: ['./basic-modal.component.less']
})
export class BasicModalComponent  {
  closeResult: string;

  constructor(private modalService: NgbModal, private connectBetween: ConnectComponentsService) { }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered: true});
  }

  deleteList(model: boolean){
    this.connectBetween.doClick(model);
  }

 changeChoice(){
   this.connectBetween.doClick();
 }

}