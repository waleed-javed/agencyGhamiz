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
  constructor( @Inject(DOCUMENT) private document:Document){}
  
  ngOnInit(): void {
    this.animation();    
  }

  animation() {
    const scrollers = this.document.querySelectorAll('.scroller');
    
    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
    
    function addAnimation() {
      scrollers.forEach((scroller:any) => {
        scroller.setAttribute('data-animated', 'true');
        scroller.setAttribute('data-direction', 'left');
        scroller.setAttribute('data-speed', 'slow');

        const scrollerInner: any = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item: any) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }

}
