import { Component } from '@angular/core';
import { gsap } from 'gsap';

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

    

let details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
let photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")


gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail:any, index:any)=> {

	let headline = detail.querySelector("h1")
	// let animation = gsap.timeline().to(photos[index], {yPercent:0}).set(allPhotos[index], {autoAlpha:0})
	
  ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 50%",
		// animation:animation,
		scrub:true,
		markers:false
	})
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});


  }
    
}
