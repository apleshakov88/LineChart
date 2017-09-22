import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DataService } from './data.service';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        LineChartComponent
    ],
    providers: [DataService],
    exports: [LineChartComponent]
})
export class ChartModule { }