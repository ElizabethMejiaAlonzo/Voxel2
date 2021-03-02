import { Injectable } from '@angular/core';
import { DataCovidService } from './dataCovid.service';
import * as L from 'leaflet';
import { icon } from 'leaflet';
import { Country } from '../models/country.model';

@Injectable({
    providedIn: 'root'
})
export class MarkerService {

    constructor(
        public covidService: DataCovidService
    ) { }

    
  private markerIcon = icon({
    iconSize: [ 20, 29 ],
    iconAnchor: [ 12, 42 ],
    iconUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png',
    shadowSize: [ 12, 21 ],
    shadowAnchor: [ 6, 21 ],
    shadowUrl: 'https://unpkg.com/leaflet@1.6.0/dist/images/marker-shadow.png'
    });

    public addMarkers(map: L.Map): void {
        this.covidService.getData().subscribe((data: Country[]) => {
            data.forEach(item => {
                const marker = L.marker([item.countryInfo.lat, item.countryInfo.long],{icon: this.markerIcon, title: item.country}).addTo(map);
                marker.bindPopup(`
                <div class="card">
                <img src=${item.countryInfo.flag} class="card-img-top" />
                <div class="card-body">
                <h5 class="card-title text-center weight-bold"> <b>${item.country}</b></h5>
                  <p class="card-text text-center font-medium">
                    <div>
                      <strong>Total cases:</strong> ${item.cases}
                    </div>
                    <div>
                      <strong>Active cases:</strong> ${item.active}
                    </div>
                    <div>
                      <strong>Deaths:</strong> ${item.deaths}
                    </div>
                    <div>
                      <strong>Recovered:</strong> ${item.recovered}
                    </div>
                  </p>
                </div>
              </div>
                `).openPopup();
            });
        });
    }
}