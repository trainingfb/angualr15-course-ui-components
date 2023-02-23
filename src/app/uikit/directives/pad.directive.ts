import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPad]'
})
export class PadDirective  {
  @Input() appPad: 0 | 1 | 2 | 3 | '' | undefined = 3;
  @HostBinding() get class() {
    return `p-${this.appPad} `
  }

  @HostBinding('style.border') border = '1px solid black'
  @HostBinding('style.margin') margin = '20px'
}
