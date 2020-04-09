import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { GridColsDirective } from './directives/grid-col-directive';

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
    FormsModule,
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
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
