import {Component} from '@angular/core';
import * as L from 'leaflet';
import { Country } from 'src/app/shared/models/country.model';
import { MarkerService } from 'src/app/shared/service/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  dataCovid: Country[];
  private map: any;

  constructor(
    private markerService: MarkerService
  ) {}

  ngOnInit() {
    this.initMap();
    this.markerService.addMarkers(this.map);
  }
  
  private initMap() {
    this.map = L.map('map').setView([19.432608, -99.133209], 5);
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
      maxZoom: 5,
      minZoom: 1,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    tiles.addTo(this.map);    
  }
}
