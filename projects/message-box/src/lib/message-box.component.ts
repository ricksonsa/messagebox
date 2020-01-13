import { MessageBox } from './message-box.service';
import { Component } from '@angular/core';
import { MessageBoxButton, MessageBoxInput } from '../public-api';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent {
  public modalOptions: MessageBox;

  public modalRef: any;
  public applicationRef: any;

  constructor() {

  }

  onClick(e) {
    e.stopPropagation();
  }

  btnClickEvent(button: MessageBoxButton) {
    if (button.func)
      button.func();

    this.dismiss(null);
  }

  backdropDismiss() {
    if (this.modalOptions && this.modalOptions.allowBackdropDismiss)
      this.dismiss(null);
  }

  dismiss(event) {
    if (event)
      event.stopPropagation();

    this.applicationRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
  }

}
