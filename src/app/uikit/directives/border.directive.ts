import { Directive, ElementRef, HostBinding, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnChanges {
  //@HostBinding('style.border') border = '1px solid red'
  @Input() appBorder: string | undefined
  @Input() borderStyle: string | undefined
  @Input() borderColor: string | undefined


  ngOnChanges(changes: SimpleChanges) {
    const { appBorder, borderStyle, borderColor } = changes;

    const weight = appBorder.currentValue || '2px';
    const style = borderStyle?.currentValue || 'solid'
    const color = borderColor?.currentValue || 'red'

    this.renderer.setStyle(
      this.el.nativeElement,
      'border',
      `${weight} ${style} ${color}`
    )
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

}
