import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [{
 path : '',
 component : ContactComponent,
 data: { animation: 'ContactPage' }
}];

@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
})
export class ContactModule { }
