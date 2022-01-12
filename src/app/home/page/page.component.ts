import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {slideInAnimation} from './animation';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  animations:[
    slideInAnimation
  ]
})




export class PageComponent implements OnInit {
  currentRoute : any;
  volume = false;
  @ViewChild("aud") audio : any;
  constructor() {

  }

  ngOnInit(): void {
  }



  prepareRoute(outlet: RouterOutlet) {
    this.currentRoute = outlet?.activatedRouteData?.['animation'];
    return outlet?.activatedRouteData?.['animation'];
  }

  sound(){
    this.volume = !this.volume;
  }
}
