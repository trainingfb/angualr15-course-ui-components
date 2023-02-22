import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fx',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="flex"
      [ngClass]="{
        'justify-center': justify === 'center',
        'justify-between': justify === 'between',
        'justify-end': justify === 'end'
      }"
      [style.gap]="gap"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class FxComponent {
  @Input() justify: 'start' | 'center' | 'between' | 'end' = 'start';
  @Input() gap: string = '0';
}
