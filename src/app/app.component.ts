import { MessageBoxService, MessageBox, ButtonType } from './../../projects/message-box/src/lib/message-box.service';
import { Component } from '@angular/core';

@Component({
  selector: 'Mbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MessageBoxPlugin';

  constructor(private messageBoxService: MessageBoxService) {

    let messageBox = MessageBox
      .Create('Aviso', 'O exame tctorax requer autorização pelo convênio Bradesco Saude')
      .AddInput('name')
      .SetInputValidation('name', 5, '99999999')
      .AddButton('Ok', () => console.log('ok clicked', messageBox.GetInputValueByName('name')), ButtonType.primary)
      .AddButton('Cancel', () => console.log('Cancel clicked', messageBox.GetInputValueByName('name')), ButtonType.outlineDanger);

    messageBoxService.present(messageBox);
    
  }
}
