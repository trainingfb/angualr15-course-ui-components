import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../uikit/components/accordion.component';
import { FxComponent } from '../uikit/components/fx.component';
import { PanelComponent } from '../uikit/components/panel.component';

@Component({
  selector: 'app-demo-layout',
  standalone: true,
  imports: [CommonModule, FxComponent, AccordionComponent, PanelComponent],
  template: `
    
    <app-panel title="Panel" [opened]="isOpen" (toggle)="isOpen = !isOpen">
      bla bla
    </app-panel>
    <br>
    <br>
    <app-accordion>
      <app-panel title="one">blabla</app-panel>
      <app-panel title="two">blabla</app-panel>
      <app-panel title="three">blabla</app-panel>
    </app-accordion>
    
    <app-fx gap="16px">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>

    <app-fx justify="between">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>

    <app-fx justify="end">
      <div>left</div>
      <div>middle</div>
      <div>right</div>
    </app-fx>
  `,
})
export default class DemoLayoutComponent {
  isOpen = true;
}
