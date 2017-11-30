import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'model-form',
  templateUrl: './modelform.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class ModelFormComponent implements OnInit {
  @Input() name: string;

  myform: FormGroup;

  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;

  langs: string[] = [
    'English',
    'French',
    'German'
  ]

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  createFormControl(){
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
       Validators.required,
       Validators.pattern('[^@]*@[^@]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('', Validators.required);
  }

  createForm(){
   this.myform = new FormGroup({
     name: new FormGroup({
       firstName: this.firstName,
       lastName: this.lastName,
     }),
     email: this.email,
     password: this.password,
     language: this.language
   })
 }

 onSubmit(){
   if(this.myform.valid){
     console.log("form submited", this.myform.value);
     this.myform.reset();
   }
 }

 
}
