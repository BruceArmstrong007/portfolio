import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
   txt = "Hi, I'm";
   subtxt = "I'm";
   name = '';
   speed = 100;
   description = "";
  constructor() {
    var doTitle = async () => {
      for (const item of this.txt) {
       this.name += item;
        await sleep(50);
      }
    }
    var sleep = (milliseconds:any) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    var doDescription = async () => {
      for (const item of this.subtxt) {
       this.description += item;
        await sleep(50);
      }
    }
    doTitle().then(()=>{
      doDescription();
    })
   }

   breakpoint = 2;

   ngOnInit() {
     this.breakpoint = (window.innerWidth <= 575) ? 1 : 2;
 }
 onResize(event : any) {
   this.breakpoint = (event.target.innerWidth <= 575) ? 1 : 2;
 }



}
