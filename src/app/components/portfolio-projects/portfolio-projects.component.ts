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

    const projectContainer:any = gsap.utils.toArray(".project-item:not(:first-child)"); 
    // get all images
    let projectDemoImagesExceptFirst:any = gsap.utils.toArray(".project-demo:not(:first-child)");
    const projectDemoImages:any = gsap.utils.toArray(".project-demo");
    
    // set images off screen verticaly
    gsap.set(projectDemoImagesExceptFirst,{yPercent:201,opacity:0.5});

    // animate them as scroll happens
    
    // const animateImages = gsap.to(projectDemoImagesExceptFirst,{
    //   yPercent:0, duration:1.5, stagger:1.5
    // });

    
        ScrollTrigger.create({
          trigger:".project-gallery",
          start:"top top",
          end:"bottom bottom",
          pin:".projects-images-container",
        })

    
        // dunamically add trigger to content
        // let tl= gsap.timeline();
        projectContainer.forEach((project: { querySelector: (arg0: string) => any; },index: string | number)=>{

          // let headline = project.querySelector(".project-stats")
          // let headline = project.querySelector("h1")
          let animation = gsap.timeline().to(projectDemoImagesExceptFirst[index], {yPercent:0,opacity:1}) .set(projectDemoImages[index], {autoAlpha:0})

          ScrollTrigger.create({
            trigger: project.querySelector("h1"),
            start:"top 70%",
            end:"top 40%",
            animation:animation,
            scrub:true,
            // markers:true
          })

          return () => { // optional
            // custom cleanup code here (runs when it STOPS matching)
            console.log("mobile")
          };
        });


    //let mm = gsap.matchMedia();
    //add a media query. When it matches, the associated function will run
    //mm.add("(min-width: 600px)", () => {});


  }
    
}
