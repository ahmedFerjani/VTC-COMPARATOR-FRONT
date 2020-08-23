import { OffersListComponent } from './ui-segments/offers-list/offers-list.component';
import { FiltersComponent } from './ui-segments/filters/filters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparatorFormComponent } from './pages/comparator-form/comparator-form.component';
import { ComparatorOffersComponent } from './pages/comparator-offers/comparator-offers.component';
import { ComparatorOfferDetailsComponent } from './pages/comparator-offer-details/comparator-offer-details.component';
import { BannerComponent } from './ui-segments/banner/banner.component';


const mainRoutes: Routes = [
  {
    path: '',
    component: ComparatorFormComponent
  },
  {
    path: 'offers',
    component: ComparatorOffersComponent
  },
  /*{
    path: 'offer-details',
    component: ComparatorOfferDetailsComponent
  },*/
  {
    path: 'info',
    loadChildren:  () => import( '../shared/shared.module').then(m => m.SharedModule)
  },

  /*{
    path: 'filter',
    component: FiltersComponent
  },
  {
    path: 'liste',
    component: OffersListComponent
  },*/
  {path : '**' , redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainFeatureRoutingModule { }
