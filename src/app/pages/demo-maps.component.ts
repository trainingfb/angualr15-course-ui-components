import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeafletComponent } from '../uikit/components/leaflet.component';
import { StaticMapComponent } from '../uikit/components/static-map.component';

@Component({
  selector: 'app-demo-maps',
  standalone: true,
  imports: [CommonModule, StaticMapComponent, LeafletComponent],
  template: `
    <div>
      <button class="btn" (click)="zoom = zoom - 1">-</button>
      <button class="btn" (click)="zoom = zoom + 1">+</button>
    </div>

    <app-leaflet
      [coords]="coords"
      [zoom]="zoom"
    ></app-leaflet>


    <app-leaflet
      [coords]="country"
      [zoom]="zoom"
    ></app-leaflet>
    
    <app-static-map [lat]="country.lat" [lng]="country.lng" [zoom]="zoom" w="300" h="100"></app-static-map>
  `,
})
export default class DemoMapsComponent {
  zoom = 10;

  coords: [number, number] = [43, 13];

  country = {
    lat: 43,
    lng: 13
  }
}
