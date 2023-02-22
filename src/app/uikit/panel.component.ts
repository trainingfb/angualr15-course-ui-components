import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('collapsable', [
      state('opened', style({
        height: '*'
      })),
      state('closed', style({
        height: 0,
        padding: 0
      })),
      transition('opened <=> closed', [
        animate('0.7s cubic-bezier(0.77, 0, 0.175, 1)')
      ])
    ])
  ],
  template: `
    <div>
      <div class="title" (click)="toggle.emit()">
        {{title}}
      </div>
      <div class="body"  [@collapsable]="opened ? 'opened' : 'closed'">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .title {
      @apply bg-slate-500 text-white p-2 cursor-pointer;
    }
    .body {
      @apply border border-slate-500 p-2 border-t-0 overflow-hidden;
    }
  `]
})
export class PanelComponent {
  @Input() opened: boolean = false;
  @Input() title: string | undefined  ;
  @Output() toggle = new EventEmitter<void>();
}
