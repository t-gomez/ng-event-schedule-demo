import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgEventScheduleModule } from 'ng-event-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgEventScheduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
