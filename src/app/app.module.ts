import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//HTTP_PROVIDERS
//IMPORT FOR LOADING
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
	//	InMemoryWebApiModule.forRoot(InMemoryDataService)
		
		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
