import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuiSommesComponent } from './components/pages/qui-sommes/qui-sommes.component';
import { PartenairesComponent } from './components/pages/partenaires/partenaires.component';
import { LesAvantagesComponent } from './components/pages/les-avantages/les-avantages.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { CommentCaMarcheComponent } from './components/pages/comment-ca-marche/comment-ca-marche.component';


const sharedRoutes: Routes = [

  {
    path: 'about',
    component: QuiSommesComponent
  },
  {
    path: 'patners',
    component: PartenairesComponent
  },
  {
    path: 'advantages',
    component: LesAvantagesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'how-to-use-our-website',
    component: CommentCaMarcheComponent
  },
  {path : '**' , redirectTo : 'about'}

];
@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
