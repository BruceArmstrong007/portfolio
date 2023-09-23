import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
})
export class TechModule { }
