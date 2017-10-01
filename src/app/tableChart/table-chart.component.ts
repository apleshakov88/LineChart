import {
    Component,
    ViewChild,
    ElementRef,
    ViewEncapsulation,
    Input,
    OnChanges
} from '@angular/core';


@Component({
  selector: 'table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TableChartComponent implements OnChanges {
    @Input() private data: any[] = [];
    @Input() private columnFields: any[] = [];
    @Input() private title: string;
    @Input() private chartType: string;

    private currency: string = '$';

    private formatHelper = {
        change: (value):string => `${value} %`,
        spend: (value):string => `${(value/1000000).toFixed(2)} ${this.currency}`,
        status: (value):string => value ? 'Show icon here' : '---',
        isSelected: (value):string => value ? 'Show icon here' : '---'
    };

    constructor() {
       
    }
    
    ngOnChanges(): void {
        if (this.data && this.data.length) {
            
        }
    }

    updateChart(): void {
       
    }

    formatData(fieldName, rowData): string {
        if (this.formatHelper[fieldName]) {
            return this.formatHelper[fieldName](rowData[fieldName]);
        }
        return rowData[fieldName] ;
    }

    rowClickHandler(e, rowData) {
        console.log('send AJAX request', rowData);
    }

    onEnterHandler(e, rowData) {
        console.log('show TOOLTIP here');
    }

    onMoveHandler(e, rowData) {
        console.log('move TOOLTIP here');
    }
    onOutHandler(e, rowData) {
        console.log('hide TOOLTIP here');
    }
}

