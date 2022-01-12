import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email  = '';
  subject = '';
  message = '';
  form : any;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

send(event : any){
  console.log(event.target)
emailjs.sendForm('service_jgojg9h', 'template_7gg8w9e', event.target, 'user_MPAJU2uzehVdsNbuLRx70')
.then((result: EmailJSResponseStatus) => {
  this.openSnackBar(result.text);
}, (error : any) => {
  this.openSnackBar(error.text);
});
}

openSnackBar(message :  any) {
  this._snackBar.openFromComponent(message, {
    duration: 5000,
  });
}

}
