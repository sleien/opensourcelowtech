import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NgImageSliderModule } from 'ng-image-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TutorialComponent,
    ContactComponent,
    DonateComponent,
    NavComponent,
    SliderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    AppRoutingModule,
    YouTubePlayerModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
