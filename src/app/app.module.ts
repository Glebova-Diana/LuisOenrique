import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { HelloComponent } from './hello/hello.component';
import { SkillsComponent } from './skills/skills.component';
import { ChartModule } from 'angular-highcharts';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    TestimonialsComponent,
    AchievementsComponent,
    HelloComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    ChartModule,
    ReactiveFormsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
