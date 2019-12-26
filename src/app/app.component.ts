import { MessageBoxService, MessageBox } from './../../projects/message-box/src/lib/message-box.service';
import { Component } from '@angular/core';

@Component({
  selector: 'Mbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MessageBoxPlugin';

  /**
   *
   */
  constructor(private mboxService: MessageBoxService) {
    let mbox = MessageBox.Create('titulo', 'message')
    .AddInput('name')
    .SetInputValidation('name', 5, '99999999')
    .AddButton('ok');
    mboxService.present(mbox);
    
  }
}
