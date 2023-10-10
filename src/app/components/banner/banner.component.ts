import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() showProjects:string =""
  @Input() projects?:string
  
  @Input() showAwards:string = ""
  @Input() awards?:string
}
