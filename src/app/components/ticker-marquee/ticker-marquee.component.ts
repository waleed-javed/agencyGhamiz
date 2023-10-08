import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import {gsap} from 'gsap';

@Component({
  selector: 'app-ticker-marquee',
  templateUrl: './ticker-marquee.component.html',
  styleUrls: ['./ticker-marquee.component.scss']
})
export class TickerMarqueeComponent implements OnInit{

  @Input("bgColor") bgColor!:string;
  constructor( @Inject(DOCUMENT) private documnt:Document){}
  
  ngOnInit(): void {
    this.animate();    
  }

  animate(){
    let firstItem= this.documnt.querySelectorAll(".first"); 
    let secondItem= this.documnt.querySelectorAll(".second"); 
    let star = this.documnt.querySelectorAll(".marquee__star")
    
    let tl = gsap.timeline();

    gsap.fromTo(star,{rotation:0, scale:1.5},{rotation:360, duration:3, ease:"linear", repeat:-1});
    
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
