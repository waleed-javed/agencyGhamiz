import { DOCUMENT } from '@angular/common';
import { Component, OnInit,Inject, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent{

  // constructor(@Inject(DOCUMENT) private document:Document){}
}
  