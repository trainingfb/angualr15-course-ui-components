import { Directive, ElementRef, HostBinding, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged, tap, withLatestFrom } from 'rxjs';
import { AuthService, Role } from './services/auth.service';

@Directive({
  selector: '[appIfLogged]'
})
export class IfLoggedDirective implements OnInit{
  @Input() appIfLogged: Role | undefined

  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
    private el: ElementRef,
    private authSrv: AuthService
  ) {
  }

  ngOnInit() {

    this.authSrv.isLogged$
      .pipe(
        withLatestFrom(this.authSrv.role$)
      )
      .subscribe(([isLogged, role]) => {
        if (isLogged && this.appIfLogged === role) {
          this.view.createEmbeddedView(this.template)
        } else {
          this.view.clear();
        }
      })
  }

}
