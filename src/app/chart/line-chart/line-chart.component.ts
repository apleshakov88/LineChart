import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from '../data.service';
import * as d3 from 'd3';

class ChartTooltip {
    private options: any = {
        container: 'body',
        element: 'div',
        animSpeed: 200,
        activeClass: 'tooltip-active',
        extraX: 30,
        extraY: -30
    };

    private tooltip;
    private isActive: boolean = false;

    constructor(private customOptions: any = {}) {
        this.options = Object.assign(this.options, customOptions);
        this.init();
    }

    init() {
        this.tooltip = d3.select(this.options.container).append(this.options.element)
            .attr("class", "tooltip")
            .style("opacity", 0);
    }

    moveTo(x: number, y: number, content?: string) {
        if (!this.isActive) this.show();
        if (content) this.setText(content);
       
        this.tooltip
            .style("left", (x + this.options.extraX) + "px")
            .style("top", (y + this.options.extraY) + "px");
    }

    setText(content: string) {
        this.tooltip.html(content);
    }

    setOrientation() {

    }

    show() {
        this.isActive = true;
        this.tooltip
            .classed(this.options.activeClass, true)
            .transition()
            .duration(this.options.animSpeed)
            .style("opacity", 1);
    }

    hide() {
        this.isActive = false;
        this.tooltip
            .classed(this.options.activeClass, false)
            .transition()
            .duration(this.options.animSpeed)
            .style("opacity", 0);
    }

    destroy() {
        this.tooltip.remove();
    }
}

class FocusLayer {
    private options: any = {
        height: 500,
        width: 900,
        circleRadius: 7.5,
        margin: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        },
        onEnter: function () { },
        onOut: function () { },
        onMove: function (d) { }
    };

    private bisectDate = d3.bisector(function (d: any) { return d.date; }).left;
    private focusLayer;
    private focusLineX;
    private focusCircle;
    private focusOverlay;
    private chartGroup;
    private focusOverlayNode;
    private x: any;
    private y: any;

    constructor(private customOptions: any = {}, private svg: any, private chartData: any[]) {
        this.options = Object.assign(this.options, customOptions);
        this.svg = d3.select(svg);

        this.updateData(chartData);
        this.init();
    }

    init() {
        this.createStructure();
        this.attachEvents();
    }

    createStructure() {
        this.chartGroup = this.svg.select('.chart-group');
        this.focusLayer = this.chartGroup.append("g")
            .attr('class', 'focus-layer')
            .style('display', 'none');

        this.focusLineX = this.focusLayer.append('line')
            .attr('class', 'x-hover-line hover-line')
            .attr("y1", 0)
            .attr("y2", this.options.height);

        this.focusCircle = this.focusLayer.append("circle")
            .attr("r", this.options.circleRadius);

        this.focusOverlay = this.svg.append("rect")
            .attr("transform", "translate(" + this.options.margin.left + "," + this.options.margin.top + ")")
            .attr("class", "focus-overlay")
            .attr("width", this.options.width)
            .attr("height", this.options.height);
        this.focusOverlayNode = this.focusOverlay.node();
    }

    attachEvents() {
        this.focusOverlay.on('mouseover', this.enterHandler);
    }

    private enterHandler = () => {
        this.focusOverlay
            .on('mousemove', this.moveHandler)
        this.focusOverlay
            .on('mouseout', this.outHandler);
        this.focusLayer.style('display', null);
        this.options.onEnter();
    }

    private moveHandler = (e: any) => {
        let x0 = this.x.invert(d3.mouse(this.focusOverlay.node())[0]);
        let i = this.bisectDate(this.chartData, x0, 1);
        let d0 = this.chartData[i - 1];
        let d1 = this.chartData[i];
        let d = x0 - d0.date > d1.date - x0 ? d1 : d0;

        this.focusLayer.attr("transform", "translate(" + this.x(d.date) + "," + 0 + ")");
        this.focusCircle.attr("transform", "translate(" + 0 + "," + (this.y(d.value)) + ")");
        this.options.onMove(d);
    }

    private outHandler = () => {this.focusLayer.style("display", "none");
        console.log('makecallback hide tooltip and remove from docuemnt move')
        this.focusLayer.style('display', 'none');
        this.focusOverlay
            .on('mousemove', null)
            .on('mouseout', null);
        this.options.onOut();
    }

    detachEvents() {
        this.focusOverlay
            .on('mouseover', null)
            .on('mousemove', null)
            .on('mouseout', null);
    }

    updateData(chartData: any[]) {
        this.chartData = chartData;

        this.x = d3.scaleTime().range([0, this.options.width]);
        this.y = d3.scaleLinear().range([this.options.height, 0]);

        this.x.domain(d3.extent(this.chartData, function(d) { return d.date; }));
        this.y.domain([0, d3.max(this.chartData, function(d) { return d.value; })]);
    }

    destroy() {
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


export class LineChartComponent implements OnInit {
    @ViewChild('chart') private chartContainer: ElementRef;
    private title = 'LineChartComponent works!';

    private margin = { top: 20, right: 20, bottom: 30, left: 40 };
    private width: number;
    private height: number;
    private x: any;
    private y: any;
    private svg: any;
    private chart: any;
    private valueline: any;
    private line: any;
    private chartData: any[] = [];
    private axisX: any;
    private axisY: any;

    private focusLayer: FocusLayer;
    private tooltipItem: ChartTooltip;

    createChart() {
        if (!this.svg) {
            this.initSvg();
            this.initTooltip();
            this.initFocus();
        }
    }

    private initTooltip() {
        this.tooltipItem = new ChartTooltip();
    }

    private initFocus() {
        this.focusLayer = new FocusLayer({
            margin: this.margin,
            width: this.width,
            height: this.height,
            onOut: () => {
                this.tooltipItem && this.tooltipItem.hide();
            },
            onMove: (d) => {
                this.tooltipItem && this.tooltipItem.moveTo(d3.event.pageX, d3.event.pageY, `<p>${d.value}</p>`);
            }
        }, this.chartContainer.nativeElement, this.chartData);
    }

    private initSvg() {
        this.svg = d3.select(this.chartContainer.nativeElement)
            .append("g")
            .attr("class", "chart-group")
            .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");


        this.x = d3.scaleTime().range([0, this.width]);
        this.y = d3.scaleLinear().range([this.height, 0]);

        this.valueline = d3.line()
           .x((d: any) => this.x(d.date))
           .y((d: any) => this.y(d.value));


        // Scale the range of the data
        this.x.domain(d3.extent(this.chartData, function (d) { return d.date; }));
        this.y.domain([0, d3.max(this.chartData, function (d) { return d.value; })]);


        // Add the X Axis
        this.axisX = this.svg.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + this.height + ")")
            .call(d3.axisBottom(this.x).tickFormat(d3.timeFormat("%b %Y")));

        // Add the Y Axis
        this.axisY = this.svg.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(this.y).tickSizeInner(-this.width));

        // Add the valueline path.
        this.line = this.svg.append("path")
            .attr("class", "line")
            .data([this.chartData])
            .attr("class", "line")
            .attr("d", this.valueline);

    }

    constructor(private dataService: DataService) {
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }

    ngOnInit() {
        this.getData();
    }

    ferfreshData() {
        this.dataService.getLineChartData().subscribe((response) => {
            this.chartData = response;
            this.updateChart();
        });
    }

    getData() {
        this.dataService.getLineChartData().subscribe((response) => {
            this.chartData = response;
            this.createChart();
        });
    }

    updateChart() {
        if (!this.line) return;

        this.x.domain(d3.extent(this.chartData, function (d) { return d.date; }));
        this.y.domain([0, d3.max(this.chartData, function (d) { return d.value; })]);

        this.line
            .data([this.chartData])
            .transition('d')
            .attr("d", this.valueline);

        this.axisX
            .transition()
            .call(d3.axisBottom(this.x).tickFormat(d3.timeFormat("%b %Y")));
        this.axisY
            .transition()
            .call(d3.axisLeft(this.y).tickSizeInner(-this.width));

        this.focusLayer.updateData(this.chartData);
    }
}
