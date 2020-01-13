import { MessageBoxService, MessageBox, ButtonType } from './../../projects/message-box/src/lib/message-box.service';
import { Component } from '@angular/core';
import { Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'Mbox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MessageBoxPlugin';

  constructor(private messageBoxService: MessageBoxService) {

    let mbox = MessageBox
      .Create('titulo', 'mensagem')
      .AddInput('name', 'Name', '')
      .AddButton('Ok', () => console.log('cacetinha', mbox.GetInputValueByName('name')), ButtonType.outlinePrimary);

    let messageBox = MessageBox
      .Create('Aviso', 'O exame tctorax requer autorização pelo convênio Bradesco Saude', true)
      .AddInput('name')
      .SetInputValidation('name', 5, '99999999')
      .SetInputValidators('name', [Validators.required])
      .AddButton('Ok', () => console.log('ok clicked', [messageBox.GetInputValueByName('name'), messageBox.formGroup.valid]), ButtonType.primary, true)
      .AddButton('Cancel', () => console.log('Cancel clicked', messageBox.GetInputValueByName('name')), ButtonType.outlineDanger);

    messageBoxService.present(messageBox);

  }
}
