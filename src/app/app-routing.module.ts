import { SharedRoutingModule } from './shared/shared-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComparatorOffersComponent } from './main-feature/pages/comparator-offers/comparator-offers.component';
import { mainModule } from 'process';
import { MainFeatureModule } from './main-feature/main-feature.module';




const routes: Routes = [

  {path: '', redirectTo: 'info', pathMatch: 'full'},

  {
    path: 'comparator',
    loadChildren:  () => import( './main-feature/main-feature.module').then(m => m.MainFeatureModule)
  },

  {path : '**' , redirectTo : ''},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
