import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  
  chartOptions= {};
  Highcharts = Highcharts;
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      subtitle: {
          text: 'Source: Wikipedia.org'
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
        
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },
      series: this.data
  },
  HC_exporting(Highcharts);
  setTimeout(() =>{
    window.dispatchEvent(
      new Event('resize')
    ), 3000
  })
  }

}
