import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    private lineChartURL: string = 'http://59c391dbd201270011552f4e.mockapi.io/line-chart';
    private updatedLineChartURL: string = 'http://59c391dbd201270011552f4e.mockapi.io/line-chart-updated';
    private isUpdated: boolean = false;
    lineChartData = [];


    constructor(private http: Http) { }


    getLineChartData(): Observable<any> {
        return this.http
            .get(this.isUpdated ? this.updatedLineChartURL : this.lineChartURL)
            .map(response => {
                this.isUpdated = !this.isUpdated;
                return response.json();
            });
    }
}