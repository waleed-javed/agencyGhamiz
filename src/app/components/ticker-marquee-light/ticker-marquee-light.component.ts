import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import {gsap} from 'gsap';
@Component({
  selector: 'app-ticker-marquee-light',
  templateUrl: './ticker-marquee-light.component.html',
  styleUrls: ['./ticker-marquee-light.component.scss']
})
export class TickerMarqueeLightComponent {

  @Input("bgColor") bgColor!:string;
  constructor( @Inject(DOCUMENT) private documnt:Document){}
  
  ngOnInit(): void {
    this.animate();    
  }

  animate(){
    let firstItem= this.documnt.querySelectorAll(".first"); 
    let secondItem= this.documnt.querySelectorAll(".second"); 
    let star = this.documnt.querySelectorAll(".marquee__star2")
    
    let tl = gsap.timeline();

    gsap.fromTo(star,{rotationX:20, scale:1.5,stagger:5},{rotationY:360, duration:2.3, ease:"power4.inOut", repeat:-1});
    
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
