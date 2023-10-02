import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-ticker-marquee',
  templateUrl: './ticker-marquee.component.html',
  styleUrls: ['./ticker-marquee.component.scss']
})
export class TickerMarqueeComponent implements OnInit{

  constructor( @Inject(DOCUMENT) private documnt:Document){}
  
  ngOnInit(): void {
  this.animate();    
  }

  animate(){
  }

}
