import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import highcharts3D from 'highcharts/highcharts-3d';
highcharts3D(Highcharts);


@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {

  chartOptions= {};
  Highcharts = Highcharts;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'column',
          options3d: {
              enabled: true,
              alpha: 10,
              beta: 25,
              depth: 70
          }
      },
      title: {
          text: '3D chart with null values'
      },
      subtitle: {
          text: 'Notice the difference between a 0 value and a null point'
      },
      plotOptions: {
          column: {
              depth: 25
          }
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
              skew3d: true,
              style: {
                  fontSize: '16px'
              }
          }
      },
      yAxis: {
          title: {
              text: null
          }
      },
      series: [{
          name: 'Sales',
          data: this.data
      }]
  }
  HC_exporting(Highcharts);
  setTimeout(() =>{
    window.dispatchEvent(
      new Event('resize')
    ), 3000
  })
  }
}
