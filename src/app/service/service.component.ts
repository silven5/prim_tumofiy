import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabService } from './services/tab.service';
import { SeriesService } from './services/series.service';
import { RecursiveService } from './services/recursiveSeries.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  public tab: Map<any, any> = new Map();
  public series: Map<any, any> = new Map();
  public seriesRec: Map<any, any> = new Map();
  public seriesResult: number = 0;
  public recurciveResult: number = 0;
  public visible: boolean[] = [false, false, false, false];
  public visibleEnter: boolean[] = [false, false, false, false];
  private tabService: TabService = new TabService();
  private SeriesService: SeriesService = new SeriesService();
  private RecursiveService: RecursiveService = new RecursiveService();
  @ViewChild('LineCanvas') private LineCanvas?: ElementRef; // Позначаємо змінну як додаткову

  lineChart: any;

  constructor() {
    Chart.register(...registerables);
  }

  getValues(btnIndex: number) {
    for (let index = 0; index < this.visibleEnter.length; index++) {
      this.visibleEnter[index] = false;
      this.visible[index] = false;

      if (index === btnIndex) {
        this.visibleEnter[index] = true;
      }
    }
  }
  TabCalculate(step: string) {
    this.tab = this.tabService.getTab(parseFloat(step));
    this.visible[0] = true;

    for (let index = 1; index < this.visible.length; index++) {
      this.visible[index] = false;
    }
    this.buildChart();
  }

  SeriesCalculate(x: string, iterations: string) {
    this.seriesResult = this.SeriesService.getSeries(
      parseFloat(x),
      parseFloat(iterations)
    );
    this.visible[1] = true;

    for (let index = 0; index < this.visible.length; index++) {
      if (index !== 1) {
        this.visible[index] = false;
      }
    }
    this.buildChart();
  }

  RecursiveCalculate(x: string, iterations: string) {
    this.recurciveResult = this.RecursiveService.getSeries(
      parseFloat(x),
      parseFloat(iterations)
    );
    this.visible[2] = true;

    for (let index = 0; index < this.visible.length; index++) {
      if (index !== 2) {
        this.visible[index] = false;
      }
    }
    this.buildChart();
  }

  AllCalculate() {
    this.visible[3] = true;

    for (let index = 0; index < this.visible.length; index++) {
      if (index !== 3) {
        this.visible[index] = false;
      }
    }

    this.tab.clear();
    this.tab = this.tabService.getTab(1);

    const iterations = 19;

    this.series.clear();

    for (let x = -3 * Math.PI; x <= 3 * Math.PI; x += 1) {
      this.series.set(
        x.toFixed(2),
        this.SeriesService.getSeries(x, iterations).toFixed(2)
      );
    }

    this.seriesRec.clear();

    for (let x = -3 * Math.PI; x <= 3 * Math.PI; x += 1) {
      this.seriesRec.set(
        x.toFixed(2),
        this.RecursiveService.getSeries(x, iterations).toFixed(2)
      );
    }

    this.buildChart();
  }

  buildChart() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.LineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: Array.from(this.tab.keys()),
        datasets: [
          {
            label: 'Табулювання',
            data: Array.from(this.tab.values()),
            fill: false,
            borderColor: 'salmon',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 1,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: Array.from(this.series.values()),
            fill: false,
            borderColor: 'lightgreen',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 1,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: Array.from(this.seriesRec.values()),
            fill: false,
            borderColor: 'lightgreen',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 1,
            spanGaps: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.5,
            },
          },
          y: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.5,
            },
          },
        },
      },
    });
  }
}
