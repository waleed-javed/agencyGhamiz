import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { TickerMarqueeComponent } from './components/ticker-marquee/ticker-marquee.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AgencyServicesComponent } from './components/agency-services/agency-services.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    TickerMarqueeComponent,
    HomepageComponent,
    AgencyServicesComponent,
    ServiceCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
