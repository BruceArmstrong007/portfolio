import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router : Router) {
    this.route.url.subscribe((res: any) => {
      if(!this.route?.snapshot?.firstChild){
        this.router.navigate(['/home']);
      }
     });
  }

  ngOnInit(): void {
  }

}
