import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ThreeComponent } from './home/three/three.component';
import { PageComponent } from './home/page/page.component';
import { AboutComponent } from './home/page/about/about.component';
import { TechComponent } from './home/page/tech/tech.component';
import { WorkComponent } from './home/page/work/work.component';
import { ContactComponent } from './home/page/contact/contact.component';

import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThreeComponent,
    PageComponent,
    AboutComponent,
    TechComponent,
    WorkComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatTooltipModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
