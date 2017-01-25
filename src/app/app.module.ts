import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RoutingComponents } from './app-routing.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
		RoutingComponents
  ],
  imports: [
    BrowserModule,
		CommonModule,
    FormsModule,
    HttpModule,
		AppRoutingModule
		
		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
