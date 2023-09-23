import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageModule } from './page/page.module';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [
    HomeComponent,
    ThreeComponent
  ],
  imports: [
    HomeRoutingModule,
    PageModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
