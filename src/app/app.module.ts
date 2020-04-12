import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatToolbarModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatSelectModule,
  MatCheckboxModule
 } from  '@angular/material';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { GridColsDirective } from './directives/grid-col-directive';
import { GaugeChartModule } from 'angular-gauge-chart'
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
    GridColsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule, 
    MatIconModule, 
    MatSidenavModule,
    MatListModule, 
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    ChartsModule,
    GaugeChartModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
