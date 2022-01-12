import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  constructor() { }
breakpoint = 2;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 2;
}
onResize(event : any) {
  this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 2;
}

}
