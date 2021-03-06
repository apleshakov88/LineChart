﻿import {
    Component,
    ViewChild,
    ElementRef,
    ViewEncapsulation,
    Input,
    OnChanges
} from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';

class ChartTooltip {
    private options: any = {
        container: 'body',
        element: 'div',
        animSpeed: 200,
        activeClass: 'tooltip-active',
        extraX: 0,
        extraY: 0,
        positionCointainer: null
    };

    private tooltip: any;
    private isActive: boolean = false;

    constructor(private customOptions: any = {}) {
        this.options = Object.assign(this.options, customOptions);
        this.init();
    }

    init(): void {
        this.tooltip = d3.select(this.options.container).append(this.options.element)
            .attr('class', 'tooltip')
            .style('opacity', 0);
    }

    moveTo(x: number, y: number, content?: string): void {
        if (!this.isActive) this.show();
        if (content) this.setText(content);

        let left = x + this.options.extraX;
        this.setOrientation(left);
        this.tooltip
            .style('left', left + 'px')
            .style('top', (y + this.options.extraY) + 'px');
    }

    setText(content: string): void {
        this.tooltip.html(content);
    }

    setOrientation(tooltipLeft: number): void {
        if (this.options.positionCointainer) {
            let positionContainerRight = this.options.positionCointainer.getBoundingClientRect().right;
            let tooltipRight = tooltipLeft + this.tooltip.node().offsetWidth;
            this.tooltip.classed('right-orientation', tooltipRight > positionContainerRight);
        }
    }

    show(): void {
        this.isActive = true;
        this.tooltip
            .classed(this.options.activeClass, true)
            .transition()
            .duration(this.options.animSpeed)
            .style('opacity', 1);
    }

    hide(): void {
        this.isActive = false;
        this.tooltip
            .classed(this.options.activeClass, false)
            .transition()
            .duration(this.options.animSpeed)
            .style('opacity', 0);
    }

    destroy(): void {
        this.tooltip.remove();
    }
}

class FocusLayer {
    private options: any = {
        height: 500,
        width: 900,
        circleRadius: 3.5,
        margin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        pixelSpace: 20,
        onEnter: function () { },
        onOut: function () { },
        onMove: function (d) { }
    };

    private bisectDate = d3.bisector((d:any) => d.date).left;
    private focusLayer: any;
    private focusLineX: any;
    private focusCircle: any;
    private focusOverlay: any;
    private chartGroup: any;
    private x: d3Scale.ScaleTime<number, number>;
    private y: d3Scale.ScaleLinear<number, number>;

    constructor(private customOptions: any = {}, private svg: any, private chartData: any[]) {
        this.options = Object.assign(this.options, customOptions);
        this.svg = d3.select(svg);

        this.updateData(chartData);
        this.init();
    }

    init(): void {
        this.createStructure();
        this.attachEvents();
    }

    createStructure(): void {
        this.chartGroup = this.svg.select('.chart-group');
        this.focusLayer = this.chartGroup.append('g')
            .attr('class', 'focus-layer')
            .style('display', 'none');

        this.focusLineX = this.focusLayer.append('line')
            .attr('class', 'x-hover-line hover-line')
            .attr('y1', 0)
            .attr('y2', this.options.height);

        this.focusCircle = this.focusLayer.append('circle')
            .attr('r', this.options.circleRadius);

        this.focusOverlay = this.svg.append('rect')
            .attr('transform', `translate(${this.options.margin.left + this.options.pixelSpace}, ${this.options.margin.top})`)
            .attr('class', 'focus-overlay')
            .attr('width', this.options.width - this.options.pixelSpace * 2)
            .attr('height', this.options.height);
    }

    attachEvents() {
        this.focusOverlay.on('mouseover', this.enterHandler);
    }

    private enterHandler = (): void => {
        this.focusOverlay
            .on('mousemove', this.moveHandler)
            .on('mouseout', this.outHandler);
        this.focusLayer.style('display', null);
        this.options.onEnter();
    }

    private moveHandler = (): void => {
        let d = this.getHoveredData();
        this.focusLayer.attr('transform', `translate(${this.x(d.date)}, 0)`);
        this.focusCircle.attr('transform', `translate(0, ${this.y(d.spent)})`);
        this.options.onMove(d);
    }

    private getHoveredData(): any {
        let x0 = this.x.invert(d3.mouse(this.focusOverlay.node())[0] + this.options.pixelSpace);
        let i = this.bisectDate(this.chartData, x0, 1);

        let d0 = this.chartData[i - 1];
        let d1 = this.chartData[i];

        let d = +x0 - (+d0.date) > (+d1.date) - (+x0) ? d1 : d0;
        return d;
    }

    private outHandler = (): void => {
        this.focusLayer.style('display', 'none');
        this.focusOverlay
            .on('mousemove', null)
            .on('mouseout', null);
        this.options.onOut();
        console.log('makecallback hide tooltip and remove from docuemnt move')
    }

    detachEvents(): void {
        this.focusOverlay
            .on('mouseover', null)
            .on('mousemove', null)
            .on('mouseout', null);
    }

    updateData(chartData: any[]): void {
        this.chartData = chartData;

        let minDate = +d3.min(this.chartData, (d: any) => d.date);
        let maxDate = +d3.max(this.chartData, (d: any) => d.date);
        let maxSpent =  +d3.max(this.chartData, (d: any) => d.spent);
        let padding = (maxDate - minDate) * this.options.pixelSpace / this.options.width;


        this.x = d3.scaleTime().range([0, this.options.width]);
        this.y = d3.scaleLinear().range([this.options.height, 0]);

        this.x.domain([minDate - padding, maxDate + padding]);
        this.y.domain([0, Math.ceil(maxSpent / 1000000000) * 1000000000]);
    }

    destroy(): void {
        this.detachEvents();
        this.focusLayer.remove();
    }
}

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LineChartComponent implements OnChanges {
    @ViewChild('chart') private chartContainer: ElementRef;
    @Input() private chartData: any[] = [];
    @Input() private chartWidth: number = 900;
    @Input() private chartHeight: number = 500;

    private margin = { top: 20, right: 20, bottom: 30, left: 60 };
    private svg: any;
    private chart: any;
    private x: d3Scale.ScaleTime<number, number>;
    private y: d3Scale.ScaleLinear<number, number>;
    private axisX: any;
    private axisY: any;
    private pixelSpace: number = 20;
    private valueline: any;
    private line: any;
   
    private focusLayer: FocusLayer;
    private tooltipItem: ChartTooltip;
    private width: number = 900;
    private height: number = 500;

    private chartVategoryText = 'Spent';

    constructor() {}

    private initTooltip(): void {
        this.tooltipItem = new ChartTooltip({
            positionCointainer: this.chartContainer.nativeElement
        });
    }

    private initFocus(): void {
        this.focusLayer = new FocusLayer({
            margin: this.margin,
            width: this.width,
            height: this.height,
            pixelSpace: this.pixelSpace,
            onOut: () => {
                this.tooltipItem && this.tooltipItem.hide();
            },
            onMove: (d) => {
                if (this.tooltipItem) {
                    this.tooltipItem.moveTo(d3.event.pageX, d3.event.pageY, this.createTooltipHTML(d));
                }
            }
        }, this.chartContainer.nativeElement, this.chartData);

       
    }

    private createTooltipHTML(d):string {
        let formatTime = d3.timeFormat("%d.%m.%Y %H:%M:%S");
        let html: string = `<div class="date-holder">${formatTime(d.date)}</div>`;
        html += `<div class="value-holder"><span class="value-label">${this.chartVategoryText}</span> ${d.spent.toString().replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ').replace('.', ',')}</div>`;
        return html;
    }

    private initSvg(): void {
        this.width = this.chartWidth - this.margin.left - this.margin.right;
        this.height = this.chartHeight - this.margin.top - this.margin.bottom;

        let minDate = +d3.min(this.chartData, (d: any) => d.date);
        let maxDate = +d3.max(this.chartData, (d: any) => d.date);
        let maxSpent =  +d3.max(this.chartData, (d: any) => d.spent);
        let padding = (maxDate - minDate) * this.pixelSpace / this.width;

        this.svg = d3.select(this.chartContainer.nativeElement)
            .attr('height', this.chartHeight)
            .attr('width', this.chartWidth)
            .attr('viewBox', `0 0 ${this.chartWidth} ${this.chartHeight}`)
            .append('g')
            .attr('class', 'chart-group')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top })`);

        this.x = d3.scaleTime().range([0, this.width]);
        this.y = d3.scaleLinear().range([this.height, 0]);

        this.valueline = d3.line()
            .x((d: any) => this.x(d.date))
            .y((d: any) => this.y(d.spent));
            //.curve(d3.curveCardinal);


        this.x.domain([minDate - padding, maxDate + padding]);
        this.y.domain([0, Math.ceil(maxSpent / 1000000000) * 1000000000]);

        this.axisX = this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', `translate(0, ${this.height})`)
            .call(d3.axisBottom(this.x)
                .tickSizeOuter(0)
                .tickFormat(d3.timeFormat('%b %Y'))
                .ticks(d3.timeMonth.every(2)));

        this.axisY = this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3.axisLeft(this.y)
                .tickSizeOuter(0)
                .tickFormat((d:any) => d / 1000000000 + ' billion')
                .tickSizeInner(-this.width)
                .ticks(Math.ceil(maxSpent / 1000000000) + 1));

        this.line = this.svg.append('path')
            .attr('class', 'line')
            .data([this.chartData])
            .attr('class', 'line')
            .attr('d', this.valueline);

    }

    ngOnChanges(): void {
        if (this.chartData && this.chartData.length) {
            if (this.svg) {
                this.updateChart();
            } else {
                this.initSvg();
                this.initTooltip();
                this.initFocus();
            }
        }
    }

    updateChart(): void {
        if (!this.line) return;

        let minDate = +d3.min(this.chartData, (d: any) => d.date);
        let maxDate = +d3.max(this.chartData, (d: any) => d.date);
        let maxSpent =  +d3.max(this.chartData, (d: any) => d.spent);
        let padding = (maxDate - minDate) * this.pixelSpace / this.width;

        this.x.domain([minDate - padding, maxDate + padding]);
        this.y.domain([0, Math.ceil(maxSpent / 1000000000) * 1000000000]);

        this.line
            .data([this.chartData])
            .transition('d')
            .attr('d', this.valueline);

        this.axisX
            .transition()
            .call(d3.axisBottom(this.x)
                .tickSizeOuter(0)
                .tickFormat(d3.timeFormat('%b %Y'))
                .ticks(d3.timeMonth.every(2)));
        this.axisY
            .transition()
            .call(d3.axisLeft(this.y)
                .tickSizeOuter(0)
                .tickFormat((d:any) => d / 1000000000 + ' billion')
                .tickSizeInner(-this.width)
                .ticks(Math.ceil(maxSpent / 1000000000) + 1));

        this.focusLayer.updateData(this.chartData);
    }
}
