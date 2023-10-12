import { DOCUMENT } from '@angular/common';
import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  Input,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-ticker-marquee',
  templateUrl: './ticker-marquee.component.html',
  styleUrls: ['./ticker-marquee.component.scss'],
})
export class TickerMarqueeComponent implements OnInit {
  @Input('bgColor') bgColor!: string;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // this.animate();
    this.animation();
  }

  animation() {
    const scrollers = this.document.querySelectorAll('.scroller');

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
    
    function addAnimation() {
      scrollers.forEach((scroller) => {
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

//   animate() {
//     let firstItem = this.document.querySelectorAll('.first');
//     let secondItem = this.document.querySelectorAll('.second');
//     let star = this.document.querySelectorAll('.marquee__star');

//     let tl = gsap.timeline();

//     gsap.fromTo(
//       star,
//       { rotation: 0, scale: 1.5 },
//       { rotation: 360, duration: 3, ease: 'linear', repeat: -1 }
//     );

//     tl.fromTo(
//       firstItem,
//       { x: 0 },
//       {
//         x: -2400,
//         duration: 12.5,
//         ease: 'linear',
//       }
//     );

//     tl.fromTo(
//       secondItem,
//       { x: 0 },
//       {
//         x: -2400,
//         duration: 12.5,
//         ease: 'linear',
//         delay: -12.5,
//       }
//     );

//     tl.repeat(Infinity);
//   }
}
