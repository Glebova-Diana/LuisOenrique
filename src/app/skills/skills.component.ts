import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public options: any = {
    chart: {
      type: 'areaspline',
      backgroundColor: '#fafafa',
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
        animation: {
          duration: 2000
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        useHTML: true,
        formatter: function() {
          if(this.value === 1)
            return '<img src="../../assets/img/xd-skills.png" style="width: 26px; vertical-align: middle"/>';
          else if(this.value === 3)
            return '<img src="../../assets/img/ae-skills.png" style="width: 26px; vertical-align: middle" />';
          else if (this.value === 5)
            return '<img src="../../assets/img/ps-skills.png" style="width: 26px; vertical-align: middle"/>';
          else if (this.value === 7)
            return '<img src="../../assets/img/ai-skills.png" style="width: 26px; vertical-align: middle"/>';
          else
            return '';
        }
      },
    },
    yAxis: {
      title: {
        text: ''
      },
      min: 50,
      max: 100,
      labels: {
          formatter: function () {
            return this.value + '%';
          }
        }
    },
    tooltip: {
      enabled: false
    },
    series: [{
      showInLegend: false,
      data: [
        49, 83, 58, 74, 56, 96, 55, 82, 49
      ],
      color: '#cccccc',
    },]
  };


  constructor() {

  }

  ngOnInit() {
    Highcharts.chart('container', this.options);
  }

}
