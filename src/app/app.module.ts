import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MethodPageComponent } from './method-page/method-page.component';
import { BenefitsPageComponent } from './benefits-page/benefits-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DoubtsPageComponent } from './doubts-page/doubts-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { HistoryComponent } from './history/history.component';
import {MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MethodPageComponent,
    BenefitsPageComponent,
    ResultPageComponent,
    PricingPageComponent,
    TeacherPageComponent,
    FooterPageComponent,
    HeaderPageComponent,
    LandingPageComponent,
    DoubtsPageComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
