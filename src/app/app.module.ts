import { MessageBoxModule } from './../../projects/message-box/src/lib/message-box.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MessageBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
