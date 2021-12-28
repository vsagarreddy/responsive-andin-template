import { Component } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexDataLabels,
} from "ng-apexcharts";

export type radialBarOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  fill: any;
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries | any;
  chart: ApexChart | any;
  labels: string[] | any;
  plotOptions: ApexPlotOptions | any;
  dataLabels: ApexDataLabels | any;
  fill: any;
};

@Component({
  selector: 'analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class Analytics {
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [50],
      chart: {
        height: 280,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              color: '#777',
              fontSize: '40px',
              fontWeight: 500,
              formatter: (val: any) => val.toString()
            },
          },
        }
      },
        fill: {
            colors: ['#FFB100'],
        },
    labels: [""]
    };
  }
}
