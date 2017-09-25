import { Component } from '@angular/core';
import { DataService } from './chart/data.service';

import { ChartData } from './chart/chart-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private chartData: ChartData[] = [];

    constructor(private dataService: DataService) {
        this.getData();
    }

    getData() {
        this.dataService.getLineChartData().subscribe((response) => {
            this.chartData = response;
        });
    }
    ferfreshData() {
        this.dataService.getLineChartData().subscribe((response) => {
           this.chartData = response;
        });
    }
}
