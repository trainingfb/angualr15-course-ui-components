import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="flex">
      <li 
        *ngFor="let tab of items" class="btn"
        (click)="tabClick.emit(tab)"
        [ngClass]="{'active': tab.id === selectedItem?.id}"
      >
        {{tab[labelField]}}
      </li>
    </ul>
  `,
})
export class TabbarComponent<T extends { id: number, [key:string]: any } >  {
  @Input() items: T[] = [];
  @Input() selectedItem: T | null = null;
  @Input() labelField = 'label';
  @Output() tabClick = new EventEmitter<T>();
}
