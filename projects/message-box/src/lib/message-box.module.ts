import { NgModule } from '@angular/core';
import { MessageBoxComponent } from './message-box.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  declarations: [MessageBoxComponent],
  imports: [
    FormsModule,
    NgxMaskModule,
    BrowserModule
  ],
  exports: [MessageBoxComponent]
})
export class MessageBoxModule { }
