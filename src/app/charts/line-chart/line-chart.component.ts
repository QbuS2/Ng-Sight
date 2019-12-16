import { LINE_CHART_COLORS } from './../../shared/chart.color';
import { Component, OnInit } from '@angular/core';

const LINE_CHART_SAMPLE_DATA: any[] = [
  { data: [32, 14, 46, 23, 58, 18], label: 'Sentiment Analysis' },
  { data: [21, 18, 42, 33, 12, 20], label: 'Image Recognition' },
  { data: [12, 64, 34, 55, 53, 10], label: 'Forecasting' }
];
const LINE_CHART_LABELS: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData: any[] = LINE_CHART_SAMPLE_DATA;
  lineChartLabels: string[] = LINE_CHART_LABELS;
  lineChartType = 'line';
  lineChartColors = LINE_CHART_COLORS;
  lineChartLegend = true;
  lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit() {
  }

}
