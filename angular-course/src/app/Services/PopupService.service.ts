import { ElementRef, Injectable, TemplateRef } from '@angular/core';
import {
  ModalDismissReasons,
  NgbModal,
  NgbToast,
} from '@ng-bootstrap/ng-bootstrap';
import { ToastTemplate } from '../Templates/Templates.component';

@Injectable({
  providedIn: 'any',
})
export class PopupService {
  constructor(private modalService: NgbModal) {}

  closeResult: any;
  public toasts: any[] = [];

  open(content: any): any {
    return this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then<boolean>(
        (result) => {
          return result;
        },
        (reason) => {
          return reason;
        }
      );
  }

  openComponent(content: any): any {
    return this.modalService.open(content).result.then((result) => {
      return result;
    });
  }

  openWithCustomParam(content: any, dummy: any): any {
    let cnstModal = this.modalService.open(content, { backdrop: 'static' });
    cnstModal.componentInstance.fromParent = dummy;
    console.log(dummy);
    return cnstModal.result.then(
      (result) => {
        return result;
      },
      (reason) => {
        return reason;
      }
    );
  }

  openWithHashMap(content: any, dummy: Map<string, object>) {
    let cnstModal = this.modalService.open(content, { backdrop: 'static' });
    cnstModal.componentInstance.fromParent = dummy;
    console.log(dummy);
    //  return cnstModal.result.then(
    //   (result) => {
    //     return result;
    //   },
    //   (reason) => {
    //     return reason;
    //   },
    //    );

    return cnstModal;
  }
}
