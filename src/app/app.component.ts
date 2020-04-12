import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //global properties
  title = 'Release Engine Console';
  breakpoint = null;
  applicationList: Array<any> = [];
  releaseList:Array<any>=[];
  getStatusForm:FormGroup;
  startDeploymentForm:FormGroup;
  renderDashboard = false;
  currentRelease = false;


  //properties for formatting data
  chartData:Array<any> = [];
  chartLabels:Array<any> = [];
  formattedData:Array<any>= [];


  //barchart field
  barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [];

  //barchart field
  lineChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };
  lineChartLabels = [];
  lineChartType = 'line';
  lineChartLegend = true;
  lineChartData = [];
  
  //star chart field
  displayRatingValue = 0;

  //Gauge chart fields
  canvasWidth = 400
  needleValue = 0
  centralLabel = ''
  name = 'Gauge chart'
  bottomLabel = ''
  options = {
    hasNeedle: true,
    needleColor: '#0052cc',
    needleUpdateSpeed: 1000,
    arcColors: ['#F2726F', '#FFC533', '#62B58F'],
    arcDelimiters: [20,40,60,80],
    rangeLabel: ['0', '100'],
    needleStartValue: 50,
  }

  constructor(private dataService: AppService,
    private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;

    this.dataService.makeGet("fetch-supported-project").subscribe(
      data => {
        this.applicationList = data.applicationList;
      },
      error => {
        console.log("error : "+JSON.stringify(error));
      }
    )

    this.getStatusForm = this.formbuilder.group({
      applicationName: ['', [Validators.required]],
      releaseName: ['', [Validators.required]]
    });

    this.startDeploymentForm  = this.formbuilder.group({
      sendNotifitcation: [false],
    })
  }

  onApplicationChange($event){
    this.releaseList = $event.value['releasesAvailable'];
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }

  onSubmitForm(): void {
    let payload = this.getStatusForm.value;
    this.dataService.makeGet("fetch-release-report/"+payload.applicationName.name+"/"+payload.releaseName)
    .subscribe(data => {
      this.modifyChartData(data.barChartData);
      this.getChartLabels(data.barChartData)
      
      //Barchart code
      this.barChartData = this.formattedData;
      this.barChartLabels = this.chartLabels;
      
      
      //linechart code
      this.lineChartData = this.formattedData;
      this.lineChartLabels = this.chartLabels;

      //gaugechart code
      this.needleValue = data.confidencePercentage
      this.bottomLabel = data.confidencePercentage+'%';

      //starchart code
      this.displayRatingValue = this.roundOfRecommendation(data.confidencePercentage)


      //start rendering datshboard here
      this.currentRelease = data.currentRelease ?true:false;
      this.renderDashboard = true
    },
    error => {
      console.error(error);
    })
  }

  resetForm(){
    this.renderDashboard = false;
    this.displayRatingValue = 0;
    this.getStatusForm.reset();
  }  

  modifyChartData(data:Array<any>){
    this.formattedData = [];
    for(let seriesList of data){
      for(let series in seriesList){
        for(let chart of seriesList[series]){
          this.chartData.push(chart.value);
        }
        this.formattedData.push({ label:series, data:this.chartData });
        this.chartData = [];
      }
    }
  }

  getChartLabels(data:Array<any>){
    this.chartLabels = [];
      for(let series in data[0]){
        for(let chart of data[0][series]){
          this.chartLabels.push(chart.key);
        }
      }
  }

  roundOfRecommendation(percentage){
    return Math.round(percentage/20)*20;
  }

  
}



