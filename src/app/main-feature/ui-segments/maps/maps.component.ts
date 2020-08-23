import { Component, OnInit } from '@angular/core';
import {AgmCoreModule} from '@agm/core';


@Component({
  selector: "app-maps",
  templateUrl: "./maps.component.html",
  styleUrls: ["./maps.component.scss"],
})
export class MapsComponent implements OnInit {
  latitude = 51.678418;
  longitude = 7.809007;


  constructor() {}

  ngOnInit(): void {}
}
