import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateButtonComponent } from './date-button/date-button.component';
import { DeliveryClosureComponent } from './delivery-closure/delivery-closure.component';

@NgModule({
  declarations: [
    AppComponent,
    DateButtonComponent,
    DeliveryClosureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
