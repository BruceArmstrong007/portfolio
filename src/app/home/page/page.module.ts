import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { TechModule } from './tech/tech.module';
import { WorkModule } from './work/work.module';


@NgModule({
  declarations: [
    PageComponent,
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    ContactModule,
    TechModule,
    WorkModule,
    AboutModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [PageComponent],
})
export class PageModule { }
