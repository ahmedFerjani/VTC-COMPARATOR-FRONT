import { Component, OnInit, ViewChild, NgZone } from "@angular/core";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
})
export class BannerComponent implements OnInit {
  flightRegex = /^([A-Z]{2}|[A-Z]\d|\d[A-Z])[1-9](\d{1,3})?$/;
  selectedDeparture: number = 0; /* to dynamically show inputs */
  selectedArrival: number = 0; /* to dynamically show inputs */
  isImmediate : boolean = false ;
  constructor(private router: Router, private toastr: ToastrService) {}

  searchForm = new FormGroup({
    //etape 1
    isImmediate: new FormControl(),
    volInfoKnownDeparture: new FormControl(),
    volNumDeparture: new FormControl(),
    //trainInfoKnownDeparture: new FormControl(),
    //busInfoKnownDeparture: new FormControl(),
    //portInfoKnownDeparture: new FormControl(),
    addressDeparture: new FormControl(),

    //etape 2
    volInfoKnownArrival: new FormControl(),
    //trainInfoKnownArrival: new FormControl(),
    //busInfoKnownArrival: new FormControl(),
    //portInfoKnownArrival: new FormControl(),

    //etape 3
    dateDeparture: new FormControl(),
    timeDeparture: new FormControl(),
  });

  showInfo() {
    console.log(this.searchForm.value);
  }

  // convert location(latitude,longitude) to human readable address
  // store result in departure
  public geocodeLatLng(lat: number, lng: number) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        location: {
          lat: lat,
          lng: lng,
        },
      },
      (
        results: google.maps.GeocoderResult[],
        status: google.maps.GeocoderStatus
      ) => {
        if (status === "OK") {
          if (results[0]) {
            console.log(results[0]);
            this.searchForm.patchValue({
              addressDeparture: results[0].formatted_address,
            });
            //this.searchForm.value.addressDeparture = results[0].formatted_address ;
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      }
    );
  }

  ngOnInit(): void {
    //Geolocation : returns latitude and longitude
    //then using the reverse geocoding to extract address(human readable)
    if (navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.geocodeLatLng(pos.coords.latitude, pos.coords.longitude);
      });
    }
  }

  // public immediate() {
  //   console.log(new Date().getUTCHours() + ":" + new Date().getMinutes());
  //   this.searchForm.patchValue({
  //     timeDeparture: new Date().getUTCHours() + ":" + new Date().getMinutes(),
  //   });
  // }

  options = {
    types: [],
    componentRestrictions: { country: "FR" },
  };

  public setSelectedDeparture(address: any) {
    if (address.types[0] == "airport") {
      this.selectedDeparture = 1;
    } else this.selectedDeparture = 0;
  }

  public setSelectedArrival(address: any) {
    if (address.types[0] == "airport") {
      this.selectedArrival = 1;
    } else this.selectedArrival = 0;
  }

  goToOffers() {
    this.router.navigate(["offers"]);
  }

  checkVolNum(code: string) {
    if (!this.flightRegex.test(code) && code != null && code != "")
      this.toastr.error("", "Le format du numéro de vol n'est pas valide", {
        closeButton: true,
        disableTimeOut: true,
      });
    console.log(this.flightRegex.test(code));
  }

  clicked() {
    this.searchForm.value.isImmediate = !this.searchForm.value.isImmediate
    console.log("clicked") ;
  }
}
