import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Directive({
  selector: '[appMyRouterLinkActive]'
})
export class MyRouterLinkActiveDirective {
  @Input() appMyRouterLinkActive: string|undefined;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
  ) {

    const routerLink = this.el.nativeElement.getAttribute('routerLink');

    router.events
      .subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          if (ev.url.includes(routerLink)) {
            this.renderer.addClass(this.el.nativeElement, this.appMyRouterLinkActive!)
          } else {
            this.renderer.removeClass(this.el.nativeElement, this.appMyRouterLinkActive!)
          }
        }
      })
  }

}
