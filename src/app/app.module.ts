import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { DisplayComponent } from './display/display.component';
import { CalcComponent } from './calc/calc.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    DisplayComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
