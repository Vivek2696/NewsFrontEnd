import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from './services/connection.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ChatComponent } from './chat/chat.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditNewsDialogComponent } from './edit-news-dialog/edit-news-dialog.component';
import { MaterialModule } from './module/material/material.module';
import { AdminQueryComponent } from './admin-query/admin-query.component';
import { NewsArticleComponent } from './news-article/news-article.component';
import { AddNewNewsDialogComponent } from './add-new-news-dialog/add-new-news-dialog.component';
import { AddNewAdminDialogComponent } from './add-new-admin-dialog/add-new-admin-dialog.component';

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
    AboutUsComponent,
    ChatComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    EditNewsDialogComponent,
    AdminQueryComponent,
    NewsArticleComponent,
    AddNewNewsDialogComponent,
    AddNewAdminDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ConnectionService, CookieService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
