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
      backgroundColor: '#fafafa'
    },
    plotOptions: {
      series: {
        animation: {
          duration: 1000
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
            return this.value;
        }
      },
    },
    yAxis: {
      title: {
        text: ''
      },
      labels: {
        formatter: function () {
          // return this.isFirst = 50 + '%';
          return this.isLast = 100 + '%';
          // this.value /1 + '%';
        }
      }
    },
    tooltip: {
      enabled: false
    },
    series: [{
      showInLegend: false,
      // shadow: '#000000',
      data: [
              // 0, 10, 15, 20, 30, 40, 50, 60, 70, 80, 83,
        0, 83, 58, 74, 56, 96, 55, 82, 0
      // 70, 65, 60, 58,
      // 60, 65, 70, 74,
      // 70, 65, 60, 56,
      // 60, 65, 70, 75, 80, 85, 90, 96,
      // 90, 85, 80, 75, 70, 65, 60, 55,
      // 60,  70, 82,
      // 75, 65, 55, 45, 35, 25, 15, 5, 0

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
