import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
const routes: Routes = [{
 path : '',
 component : WorkComponent,
 data: { animation: 'WorkPage' }
}];

@NgModule({
  declarations: [
    WorkComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatStepperModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class WorkModule { }
