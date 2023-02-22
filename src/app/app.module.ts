import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeparatorComponent } from './uikit/separator.component';
import { StaticMapComponent } from './uikit/static-map.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SeparatorComponent,
    StaticMapComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
