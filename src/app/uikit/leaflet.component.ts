import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatLngExpression } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #map class="map"></div>
  `,
  styles: [`
    .map { height: 200px }
  `]
})
export class LeafletComponent implements OnChanges {
  @Input() coords: LatLngExpression | null = null;
  @Input() zoom: number = 5;
  @ViewChild('map', { static: true}) mapReference!: ElementRef<HTMLDivElement>;
  map!: L.Map;

  init() {
    if (this.coords) {
      this.map = L.map(this.mapReference.nativeElement)
        .setView(this.coords, this.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { coords, zoom} = changes;

    if (!this.map) {
      this.init();
    }
    if (coords) {
      this.map.setView(coords.currentValue)
    }
    if (zoom) {
      this.map.setZoom(zoom.currentValue)
    }
  }

}
