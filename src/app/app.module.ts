import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogModule} from '@angular/material';
import { EditorComponent } from 'app';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule, AngularEditorModule,MatDialogModule, HttpClientModule ],
  declarations: [ AppComponent,EditorComponent ],
  bootstrap:    [ AppComponent ],
   entryComponents: [EditorComponent,]
})
export class AppModule { }
