import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-total-supplies',
  templateUrl: './total-supplies.component.html',
  styleUrls: ['./total-supplies.component.scss']
})
export class TotalSuppliesComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020', '2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'InPatient' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'OutPatient' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
