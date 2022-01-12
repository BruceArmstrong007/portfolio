import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/page/about/about.component';
import { TechComponent } from './home/page/tech/tech.component';
import { WorkComponent } from './home/page/work/work.component';
import { ContactComponent } from './home/page/contact/contact.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[
     {
       path:'',
       component: AboutComponent,
       data: { animation: 'AboutPage' }
     },
     {
      path:'tech',
      component: TechComponent,
      data: { animation: 'TechPage' }
    },
    {
      path:'work',
      component: WorkComponent,
      data: { animation: 'WorkPage' }
    },
    {
      path:'contact',
      component: ContactComponent,
      data: { animation: 'ContactPage' }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
