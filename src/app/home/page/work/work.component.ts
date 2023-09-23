import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  constructor() { }
  switchTab = 0;

  ngOnInit() {
}

changeTab(value : any){
  this.switchTab = value;
}

}
