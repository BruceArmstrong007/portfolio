import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech.component';

const routes: Routes = [{
 path : '',
 component : TechComponent,
 data: { animation: 'TechPage' }
}];

@NgModule({
  declarations: [
    TechComponent,
  ],
  imports: [
    MatGridListModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class TechModule { }
