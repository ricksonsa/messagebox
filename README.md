## Important

message-box-plugin depends on Ngx-Mask for mask validation at inputs.


## Installing

```bash
$ npm install --save message-box-plugin
```

## Quickstart

Import **message-box-plugin** module in Angular app.

```typescript
import { MessageBoxModule } from  'message-box-plugin';

@NgModule({
  (...)
  imports: [
    MessageBoxModule
  ]
  (...)
})
```
### Usage

```typescript
     constructor(private messageBoxService: MessageBoxService) {

    let messageBox = MessageBox
      .Create('title', 'message')
      .AddInput('name')
      .SetInputValidation('name', 5, '99999999')
      .AddButton('Ok', () => console.log('ok clicked', messageBox.GetInputValueByName('name')), ButtonType.primary)
      .AddButton('Cancel', () => console.log('Cancel clicked', messageBox.GetInputValueByName('name')),                 ButtonType.outlineDanger);

    messageBoxService.present(messageBox);
    
  }
```

MessageBox.Create(title, message) - Creates an instance of MessageBox class.

AddInput receives 3 parameters: name, placeholder(optional) and value(optional)

    - name : The reference to the input to get it's value or set it's validation.
    - placeholder : Input placeholder
    - value : Input value

Use GetInputValueByName('name of the input') on a MessageBox instance to get an input's value.

SetInputValidation receives 3 parameters: id, maxLength(optional) and mask(optional)

    - id : Reference to the input on a MessageBox, can be array index or the name of the input.
    - maxLength : maxLength of the input
    - mask - Mask using Ngx-Mask plugin.

AddButton receives 3 parameters: text, function and type

    - text : The text inside the button.
    - function : The callback function that you be passsed to the eventhandler.
    - type : ButtonType Enum with the css class


With the instance of MessageBox class already setted up

call MessageBoxService.present(messageBox) passing that instance as parameter.
