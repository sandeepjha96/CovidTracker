import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoronaServiceService } from './corona-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DistrictComponent } from './district/district.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DistrictService } from './district.service';
import { FaqComponent } from './faq/faq.component';
import { HelplineComponent } from './helpline/helpline.component';
import { ContactComponent } from './contact/contact.component';
import { StateDataComponent } from './state-data/state-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DistrictComponent,
    FaqComponent,
    HelplineComponent,
    ContactComponent,
    StateDataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CoronaServiceService,DistrictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
