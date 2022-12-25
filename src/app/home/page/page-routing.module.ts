import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page.component';
const routes: Routes = [{
  path: '',
  component: PageComponent,
  children:[
    {
      path:'',
      redirectTo : 'about',
      pathMatch : 'full'
    },
     {
       path:'about',
       loadChildren: ()=>import('./about/about.module').then(m => m.AboutModule)
     },
     {
      path:'tech',
      loadChildren: ()=>import('./tech/tech.module').then(m => m.TechModule)
    },
    {
      path:'work',
      loadChildren: ()=>import('./work/work.module').then(m => m.WorkModule)
    },
    {
      path:'contact',
      loadChildren: ()=>import('./contact/contact.module').then(m => m.ContactModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
