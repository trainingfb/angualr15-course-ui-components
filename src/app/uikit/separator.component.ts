import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-separator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="separator"
      [style.borderBottomColor]="color"
      [style.borderStyle]="type"
      [style.marginTop.px]="margin"
      [style.marginBottom.px]="margin"
    ></div>
  `,
  styles: [`
    .separator {
      border-width: 1px;
      margin: 0 0 0 0;
      /*border-color: black;*/
    }

    .dotted {
      border-style: dotted;
    }

    .dashed {
      border-style: dashed;
    }
  `]
})
export class SeparatorComponent {
  @Input() color = 'black';
  @Input() margin: number | string = 10;
  @Input() type = 'solid';
}
