import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

const baseURL = 'https://www.mapquestapi.com/staticmap/v5/map';
const token = 'Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn'

@Component({
  selector: 'app-static-map',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img *ngIf="url" [src]="url" style="width: 100%;" />
  `,
})
export class StaticMapComponent implements OnChanges {
  @Input() lat: number | undefined;
  @Input() lng: number | undefined;
  @Input() w: number | string = 200;
  @Input() h: number | string = 100;
  @Input() zoom = 6;

  url: string | undefined;

  ngOnChanges(changes: SimpleChanges) {
    this.setURL();
  }

  setURL() {
    this.url = `${baseURL}?key=${token}&center=${this.lat},${this.lng}&zoom=${this.zoom}&size=${this.w},${this.h}`
  }
}

