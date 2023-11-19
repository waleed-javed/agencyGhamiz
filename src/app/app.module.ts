import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { TickerMarqueeComponent } from './components/ticker-marquee/ticker-marquee.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgencyServicesComponent } from './components/agency-services/agency-services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { BannerComponent } from './components/banner/banner.component';
import { TickerMarqueeLightComponent } from './components/ticker-marquee-light/ticker-marquee-light.component';
import { PortfolioProjectsComponent } from './components/portfolio-projects/portfolio-projects.component';
import { FooterNavigationsComponent } from './components/footer-navigations/footer-navigations.component';
import { MissionStatementComponent } from './components/mission-statement/mission-statement.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    TickerMarqueeComponent,
    HomepageComponent,
    AgencyServicesComponent,
    ServiceCardComponent,
    PortfolioComponent,
    BannerComponent,
    TickerMarqueeLightComponent,
    PortfolioProjectsComponent,
    FooterNavigationsComponent,
    MissionStatementComponent,
    TestimonialsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
