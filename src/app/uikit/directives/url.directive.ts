import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[url]'
})
export class UrlDirective {
  @Input() url: string | undefined;
  @HostBinding() class = 'btn btn-primary'

  @HostListener('click')
  clickMe() {
    window.open(this.url)
  }
}
