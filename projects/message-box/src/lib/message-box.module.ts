import { NgModule } from '@angular/core';
import { MessageBoxComponent } from './message-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [MessageBoxComponent],
  entryComponents: [
    MessageBoxComponent
  ],
  imports: [
    FormsModule,
    NgxMaskModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [MessageBoxComponent]
})
export class MessageBoxModule { }
