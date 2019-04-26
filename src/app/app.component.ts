import { Component,Inject } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, FormArray,FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
  htmlContent = '';
   constructor(public dialog: MatDialog,private formBuilder: FormBuilder) { }

    opendialog(){
     alert("reachinggg");

     let dialogRef = this.dialog .open(EditorComponent, {
    
        
      width: '1000px',
      height:'800px'
    }
    );
   }
 

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ],
   
  }
}

@Component({
  selector: 'EditorComponent',
  templateUrl: './editor.component.html',
 
})
export class EditorComponent  {
  name = 'Angular 6';
  htmlContent = '';
       
     constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<EditorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      
 
    }
  

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }
}


