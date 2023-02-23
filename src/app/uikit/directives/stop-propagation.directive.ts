import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appStopPropagation]'
})
export class StopPropagationDirective {

  @HostListener('click', ['$event'])
  stoppami(event: MouseEvent) {
    event.stopPropagation()
  }
}
