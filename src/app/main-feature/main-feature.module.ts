import { MapsComponent } from './ui-segments/maps/maps.component';
import { FiltersComponent } from './ui-segments/filters/filters.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeatureRoutingModule} from './main-feature-routing.module';
import { ComparatorFormComponent } from './pages/comparator-form/comparator-form.component';
import { ComparatorOffersComponent } from './pages/comparator-offers/comparator-offers.component';
import { ComparatorOfferDetailsComponent } from './pages/comparator-offer-details/comparator-offer-details.component';
import { BannerComponent } from './ui-segments/banner/banner.component';
import { OffersListComponent } from './ui-segments/offers-list/offers-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { SharedModule } from '../shared/shared.module';

  @NgModule({
    declarations: [
      ComparatorFormComponent,
      ComparatorOffersComponent,
      ComparatorOfferDetailsComponent,
      BannerComponent,
      OffersListComponent,
      FiltersComponent,
      MapsComponent,

    ],
    imports: [
      CommonModule,
      MainFeatureRoutingModule,
      ReactiveFormsModule,
      GooglePlaceModule,
      FormsModule,
      AgmCoreModule.forRoot({
        apiKey: "AIzaSyDkJjmwF0PRX3IKKGwIn3v8j4uoHvjnWl0",
      }),
      SharedModule,
    ],
    exports: [BannerComponent, OffersListComponent, FiltersComponent,MapsComponent],
    providers: []
  })
  export class MainFeatureModule {

  }
