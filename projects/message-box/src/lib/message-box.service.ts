import { Injectable, ComponentRef, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { MessageBoxComponent } from '../public-api';

@Injectable({
  providedIn: 'root'
})
export class MessageBoxService {
  componentRef: ComponentRef<MessageBoxComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
  ) { }

  present(modalOptions: MessageBox) {
    if (this.componentRef)
      this.dismiss();

    this.componentRef = this.componentFactoryResolver.resolveComponentFactory(MessageBoxComponent)
      .create(this.injector);

    this.applicationRef.attachView(this.componentRef.hostView);

    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.prepend(domElem);
    this.componentRef.instance.modalRef = this.componentRef;
    this.componentRef.instance.applicationRef = this.applicationRef;

    this.componentRef.instance.title = modalOptions.title;
    this.componentRef.instance.message = modalOptions.message;
    this.componentRef.instance.buttons = modalOptions.buttons;
    this.componentRef.instance.inputs = modalOptions.inputs;
    this.componentRef.instance.allowBackdropDismiss = modalOptions.allowBackdropDismiss;

    return this.componentRef;
  }

  dismiss() {
    this.applicationRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}

export class MessageBox {
  title: string;
  message: string;
  buttons: MessageBoxButton[];
  inputs: MessageBoxInput[];
  allowBackdropDismiss: boolean;

  constructor(title: string, message: string, buttons?: MessageBoxButton[], inputs?: MessageBoxInput[]) {
    this.title = title;
    this.message = message;
    this.buttons = [];
    this.inputs = [];
    this.allowBackdropDismiss = true;

    if (buttons)
      this.buttons = buttons;

    if (inputs)
      this.inputs = inputs;
  }

  static Create(title: string, message: string): MessageBox {
    return new MessageBox(title, message);
  }

  public GetInputValueByIndex(inputIndex: number): string {
    return this.inputs[inputIndex].value;
  }

  public GetInputValueByName(name: string): string {
    let input = this.inputs.filter(x => x.name == name);

    if (input)
      return input[0].value;

    return null;
  }

  public AddButton(text: string, func?: Function,type?: ButtonType): MessageBox {
    this.buttons.push(new MessageBoxButton(text, type, func));
    return this;
  }

  public AddInput(name: string, placeholder?: string, value?: string): MessageBox {
    this.inputs.push(new MessageBoxInput(placeholder, value, name));
    return this;
  }

  public SetInputValidation(id: number | string, maxLength?: number, mask?: string): MessageBox {
    let input: MessageBoxInput;

    if (typeof (id) == "number")
      input = this.inputs[id];
    else
      input = this.inputs.filter(x => x.name == id)[0];

    input.maxLength = maxLength;
    input.mask = mask;

    return this;
  }

}

export class MessageBoxButton {
  text: string;
  type?: ButtonType = ButtonType.secondary;
  func?: Function;

  constructor(text: string, type?: ButtonType, func?: Function) {
    this.text = text;
    this.type = type;
    this.func = func;
  }

}

export class MessageBoxInput {
  name?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  mask?: string;

  constructor(placeholder?: string, value?: string, name?: string, maxLength?: number) {
    this.placeholder = placeholder;
    this.value = value;
    this.name = name;
    this.maxLength = maxLength;
  }
}

export enum ButtonType {
  success = 'btn-success',
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  danger = 'btn-danger',
  //outline
  outlinePrimary = 'btn-outline-primary',
  outlineSecondary = 'btn-outline-secondary',
  outlineDanger = 'btn-outline-danger',
  outlineSuccess = 'btn-outline-success',
}