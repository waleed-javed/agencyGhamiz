import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import {gsap} from 'gsap';
import { window } from 'rxjs';

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
    console.log("Animation Started");

    let firstItem= this.documnt.querySelectorAll(".first"); 
    let secondItem= this.documnt.querySelectorAll(".second"); 
    let star = this.documnt.querySelectorAll(".marquee__star")
    
    let tl = gsap.timeline();

    gsap.fromTo(star,{rotation:0},{rotation:360, duration:1.5, ease:"power4.inOut", scale:1.5 , repeat:-1});
    
    tl.fromTo(firstItem,{x:0},{
      x:-2400,
      duration:12.5,
      ease:"linear",
    });

    tl.fromTo(secondItem,{x:0},{
      x:-2400,
      duration:12.5,
      ease:"linear",
      delay:-12.5,
    });

    tl.repeat(Infinity);
  }

}
