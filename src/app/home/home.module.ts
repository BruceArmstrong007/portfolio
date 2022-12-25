import { NgModule } from '@angular/core';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PageModule } from './page/page.module';
import { ThreeComponent } from './three/three.component';


@NgModule({
  declarations: [
    HomeComponent,
    ThreeComponent,
    NotFoundComponent
  ],
  imports: [
    HomeRoutingModule,
    PageModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
