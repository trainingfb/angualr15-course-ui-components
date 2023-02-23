import { Directive, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';


export type BgStyles = { color: string, bg: string}

@Directive({
  selector: '[appBg]'
})
export class BgDirective {
  @Input() set appBg(val: string | BgStyles | string[]) {
    const isArray = Array.isArray(val);
    if (isArray) {
      this.clsHandler(val)
    } else if (typeof val === 'string') {
      this.strHandler(val)
    } else {
      this.styleHandler(val)
    }
  }

  strHandler(val: string) {
    this.renderer.setStyle(
      this.el.nativeElement, 'backgroundColor', val
    )
  }

  clsHandler(array: string[]) {
      for (let cls of array) {
        this.renderer.addClass(this.el.nativeElement, cls)
      }
  }

  styleHandler(obj: BgStyles) {
      this.renderer.setStyle(
        this.el.nativeElement, 'backgroundColor', obj.bg
      )

      this.renderer.setStyle(
        this.el.nativeElement, 'color', obj.color
      )
  }


  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }
}


// document.getElementById().style.backgroundColor = 'red'
