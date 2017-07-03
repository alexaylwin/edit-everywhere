import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EditorComponent } from './components/editor.component';

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [EditorComponent]
})
export class AppModule { }
