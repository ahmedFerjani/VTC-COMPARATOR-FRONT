import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFeatureModule } from './main-feature/main-feature.module';
import { SharedModule } from './shared/shared.module';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainFeatureModule,
    SharedModule,
    AppRoutingModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDkJjmwF0PRX3IKKGwIn3v8j4uoHvjnWl0",
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
