import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor() { }

  breakpoint = 5;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 3 : (window.innerWidth <= 500 ? 4 : 5);
}
onResize(event : any) {
  this.breakpoint = (event.target.innerWidth <= 400) ? 3 : (event.target.innerWidth <= 500 ? 4 : 5);
}

}
