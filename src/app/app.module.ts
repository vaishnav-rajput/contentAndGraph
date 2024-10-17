import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { SummaryCardComponent } from './reusableComponents/summary-card/summary-card.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { ShowChartComponent } from './components/show-chart/show-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    SummaryCardComponent,
    ShowChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
