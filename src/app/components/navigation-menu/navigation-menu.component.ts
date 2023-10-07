import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {


  constructor(@Inject(DOCUMENT) private document:Document){}
  
  
  showSidebar(){
    this.document.querySelector(".sidebar")?.classList.add("active");
  }
  
  hideSidebar(){
    let sidebar = this.document.querySelector(".sidebar");
     console.log("sidebar:",sidebar)
     sidebar?.classList.remove("active");
     console.log("sidebar:",sidebar)
  }
}
