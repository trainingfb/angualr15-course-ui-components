import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeparatorComponent } from '../uikit/components/separator.component';

@Component({
  selector: 'app-demo-separator',
  standalone: true,
  imports: [CommonModule, SeparatorComponent],
  template: `
    <app-separator></app-separator>
    <app-separator color="red" margin="20" type="dashed"></app-separator>
    <app-separator color="blue" margin="30" type="dotted"></app-separator>
  `,
})
export default class DemoSeparatorComponent {

}
