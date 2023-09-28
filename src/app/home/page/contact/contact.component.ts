import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: any;

  constructor(
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      myemail: ['brucearmstrongofficial@gmail.com'],
      subject: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(10),
        ]),
      ],
      message: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(500),
          ,
          Validators.minLength(10),
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  get f() {
    return this.form?.controls;
  }

  send() {
    if (this.form.valid) {
      const mailtoLink = `mailto:${
        this.form.value.myemail
      }?subject=${encodeURIComponent(
        this.form.value.subject
      )}&body=${encodeURIComponent(this.form.value.message)}`;
      window.location.href = mailtoLink;
    }
  }

  openSnackBar(message: any) {
    this._snackBar.open(message, 'Close', {
      duration: 5000,
    });
  }
}
