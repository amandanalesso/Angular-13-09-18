import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetaComponent } from './planet/planeta.component';
import { PlanetaModule } from './planet/planeta.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PlanetaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
