import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'demo-separator', loadComponent: () => import('./pages/demo-separator.component')},
  { path: 'demo-maps', loadComponent: () => import('./pages/demo-maps.component')},
  { path: 'demo-tabbar', loadComponent: () => import('./pages/demo-tabbar.component')},
  { path: 'demo-layout', loadComponent: () => import('./pages/demo-layout.component')},
  { path: '', redirectTo: 'demo-separator', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
