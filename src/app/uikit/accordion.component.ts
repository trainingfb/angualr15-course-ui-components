import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
  `,
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(PanelComponent) groups!: QueryList<PanelComponent>;

  ngAfterContentInit(): void {
    this.groups.toArray().forEach((g) => {
      g.toggle.subscribe(() => {
        this.openGroup(g);
      });
    });

    this.groups.toArray()[0].opened = true;
  }

  openGroup(group: PanelComponent): void {
    this.groups.toArray().forEach(g => g.opened = false);
    group.opened = true;
  }
}
