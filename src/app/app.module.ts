import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './services/connection.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    WeatherReportComponent,
    LatestNewsComponent,
    ImageSliderComponent,
    HomeComponent,
    ErrorComponent,
    SportsComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
