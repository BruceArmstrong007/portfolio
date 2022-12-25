import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form : any;

  constructor(private _snackBar: MatSnackBar,private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      email : ['',Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
        Validators.maxLength(320),
        Validators.minLength(4)
      ])],
      myemail : ['brucearmstrongofficial@gmail.com'],
      subject : ['',Validators.compose([
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(10)
      ])],
      message : ['',Validators.compose([
        Validators.required,
        Validators.maxLength(500),,
        Validators.minLength(10)
      ])],
    })
   }

  ngOnInit(): void {
  }

  get f(){
    return this.form?.controls;
  }

send(event : any){
if(this.f.valid){
  emailjs.sendForm('service_jgojg9h', 'template_7gg8w9e', event.target, 'user_MPAJU2uzehVdsNbuLRx70')
  .then((result: EmailJSResponseStatus) => {
    if(result?.status === 200){
      this.openSnackBar('Successfully Sent');
    }
  }, (error : any) => {
    this.openSnackBar(error.text);
  });
}
}

openSnackBar(message :  any) {
  this._snackBar.open(message,'Close',{
    duration: 5000,
  });
}

}
