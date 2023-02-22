import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { City, Country } from '../model/country';
import { TabbarComponent } from '../uikit/tab-bar.component';

@Component({
  selector: 'app-demo-tabbar',
  standalone: true,
  imports: [CommonModule, TabbarComponent],
  template: `
    <app-tab-bar
      [items]="countries"
      [selectedItem]="activeCountry!"
      (tabClick)="selectCountry($event)"
    ></app-tab-bar>

    <app-tab-bar
      *ngIf="activeCountry"
      labelField="name"
      [items]="activeCountry.cities"
      [selectedItem]="activeCity"
      (tabClick)="selectCity($event)"
    ></app-tab-bar>

    <img
      *ngIf="activeCity?.name"
      width="100%"
      [src]="'https://www.mapquestapi.com/staticmap/v5/map?key=Go3ZWai1i4nd2o7kBuAUs4y7pnpjXdZn&center='  + activeCity?.name + '&size=600,400'" alt="">

  `,
  styles: [
  ]
})
export default class DemoTabbarComponent {
  countries: Country[] = [];
  activeCountry: Country | null = null;
  activeCity: City | null = null;

  selectCountry(country: Country) {
    this.activeCountry = country;
    this.activeCity = this.activeCountry.cities[0]
  }

  selectCity(city: City) {
    this.activeCity = city;
  }

  constructor() {
    setTimeout(() => {
      this.countries = [
        {
          id: 2,
          label: 'germany',
          desc: 'bla bla 2',
          cities: [
            { id: 1, name: 'Berlin' },
            { id: 2, name: 'Monaco' }
          ]
        },
        {
          id: 1, label: 'italy', desc: 'bla bla 1',   cities: [
            { id: 11, name: 'Rome' },
            { id: 22, name: 'Milan' },
            { id: 33, name: 'Palermo' },
          ]
        },
        { id: 3, label: 'spain', desc: 'bla bla 3', cities: [
            {id: 41, name: 'Madrid'}
          ]},
      ];
      this.selectCountry(this.countries[0])
    }, 1000)
  }


}
