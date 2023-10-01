import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { TickerMarqueeComponent } from './components/ticker-marquee/ticker-marquee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    TickerMarqueeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
