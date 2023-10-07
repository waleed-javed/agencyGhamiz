import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {

  @Input("logo") logo?:string;
  @Input("title") title?:string;
  @Input("description") description?:string;
  // @Input("chips") chipItems?:string;

}
