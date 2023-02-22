import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <div>
      <button class="btn" routerLink="demo-separator">Separators</button>
      <button class="btn" routerLink="demo-maps">Maps</button>
      <button class="btn" routerLink="demo-tabbar">Tabbar</button>
      <button class="btn" routerLink="demo-layout">Layout</button>
    </div>
    
    <div class="max-w-screen-lg mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {

}
