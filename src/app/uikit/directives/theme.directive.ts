import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';
import { distinctUntilChanged, pairwise, startWith, tap } from 'rxjs';
import { ThemeService } from './services/theme.service';

const THEMES: { [key: string]: string } = {
  light: 'bg-info',
  dark: 'bg-dark'
}


@Directive({
  selector: '[appThemed]'
})
export class ThemeDirective {
  constructor(
    public themeSrv: ThemeService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    themeSrv.theme$
      .pipe(
        startWith(''),
        distinctUntilChanged(),
        pairwise(),
      )
      .subscribe(([prev, current]) => {
        this.renderer.removeClass(el.nativeElement, THEMES[prev])

        if (current === 'dark') {
          this.renderer.addClass(el.nativeElement, THEMES['dark'])
          // this.renderer.addClass(el.nativeElement, 'text-white')
        } else {
          this.renderer.addClass(el.nativeElement, THEMES['light'])
        }


      })
  }

}
