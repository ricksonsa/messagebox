import { Component } from '@angular/core';
import { MessageBoxButton, MessageBoxInput } from '../public-api';

@Component({
  selector: 'lib-MessageBox',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent  {
  public title: string;
  public message: string;
  public buttons: MessageBoxButton[] = [];
  public inputs: MessageBoxInput[] = [];
  public allowBackdropDismiss: boolean;

  public modalRef: any;
  public applicationRef: any;

  constructor() {
  }

  onClick(e) {
    e.stopPropagation();
  }

  btnClickEvent(button: MessageBoxButton) {
    if(button.func)
      button.func();

    this.dismiss(null);
  }

  backdropDismiss() {
    if(this.allowBackdropDismiss)
      this.dismiss(null);
  }
  
  dismiss(event) {
    if(event)
      event.stopPropagation();

    this.applicationRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
  }

}
