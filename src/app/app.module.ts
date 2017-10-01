import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChartModule } from './chart/chart.module';
import { TableChartComponent } from './tableChart/table-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TableChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
