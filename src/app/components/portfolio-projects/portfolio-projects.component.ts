import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-portfolio-projects',
  templateUrl: './portfolio-projects.component.html',
  styleUrls: ['./portfolio-projects.component.scss']
})
export class PortfolioProjectsComponent {


  
  ngOnInit(){

    this.animate();
  }

  animate(){

    // get all images
    const projectDemoImages = gsap.utils.toArray(".project-demo:not(:first-child)");
    
    // set images off screen verticaly
    gsap.set(projectDemoImages,{yPercent:101});

    // animate them as scroll happens
    
    const animateImages = gsap.to(projectDemoImages,{
      yPercent:0, duration:1.5, stagger:1.5
    });

    
        ScrollTrigger.create({
          trigger:".project-gallery",
          start:"top top",
          end:"bottom bottom",
          pin:".projects-images-container",
        })

    
    //let mm = gsap.matchMedia();
    //add a media query. When it matches, the associated function will run
    //mm.add("(min-width: 600px)", () => {});


  }
    
}
