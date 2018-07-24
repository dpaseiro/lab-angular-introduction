import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NbacomponentComponent } from './nbacomponent/nbacomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NbacomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
