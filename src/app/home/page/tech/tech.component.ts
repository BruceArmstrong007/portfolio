import { Component, AfterViewInit,ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})

export class TechComponent implements AfterViewInit  {
   data: any[] = [
    { skill : "★★★★☆", name : "Angular 2+"},
    { skill : "★★★☆☆", name : "NGRX"},
    { skill : "★★★☆☆", name : "RxJS"},
    { skill : "★★★☆☆", name : "NG-ZORRO"},
    { skill : "★★★☆☆", name : "Laravel Framework"},
    { skill : "★★★☆☆", name : "MySQL"},
    { skill : "★★★☆☆", name : "JIRA"},
    { skill : "★★★☆☆", name : "Git"},
    { skill : "★★★☆☆", name : "Bootstrap5"},
    { skill : "★★★☆☆", name : "Sessions"},
    { skill : "★★★☆☆", name : "JWT Tokens"},
    { skill : "★★★☆☆", name : "THREE JS"},
    { skill : "★★★☆☆", name : "Socket.io"},
    { skill : "★★★★★", name : "HTML5"},
    { skill : "★★★☆☆", name : "CSS3"},
    { skill : "★★★☆☆", name : "JavaScript"},
    { skill : "★★★☆☆", name : "PHP"},
    { skill : "★★★☆☆", name : "Node.js"},
    { skill : "★★★☆☆", name : "Python"},
    { skill : "★★☆☆☆", name : "Django"},
    { skill : "★★★☆☆", name : "Google Maps JS API"},
    { skill : "★★★☆☆", name : "Firebase Auth"},
    { skill : "★★★☆☆", name : "Firebase Storage"},
    { skill : "★★★☆☆", name : "Firebase Firestore"},
    { skill : "★★★☆☆", name : "Firebase Hosting "},
    { skill : "★☆☆☆☆", name : "Blender"},
    { skill : "★★★☆☆", name : "ExpressJS"},
    { skill : "★★★☆☆", name : "Angular Material"},
    { skill : "★★☆☆☆", name : "Tauri - Rust"},
    { skill : "★★★☆☆", name : "AWS E2"},
    { skill : "★★★☆☆", name : "AWS S3"},
    { skill : "★★☆☆☆", name : "MongoDB"},
    { skill : "★★★☆☆", name : "PrimeNG Angular"},
    { skill : "★★★☆☆", name : "JQX Angular"},
    { skill : "★★★☆☆", name : "VS Code"},
    { skill : "★★★☆☆", name : "Postman"},
    { skill : "★☆☆☆☆", name : "Jenkins"},
    { skill : "★★★☆☆", name : "CI/CD"},
    { skill : "★★★☆☆", name : "NX workspace"},
    { skill : "★★☆☆☆", name : "Tailwind"},
    { skill : "★★★☆☆", name : "tRPC"},
    { skill : "★★★☆☆", name : "NestJS"},
    { skill : "★★★☆☆", name : "NodeMailer"},
    { skill : "★★★☆☆", name : "RedisDB"},
    { skill : "★★★☆☆", name : "Docker"},
    { skill : "★★☆☆☆", name : "RabbitMQ"},
    { skill : "★★☆☆☆", name : "WebRTC"},
    { skill : "★★☆☆☆", name : "Microservices"},

  ];
  dataSource : any;
  filterPredicate = (data : any, filter: string) => {
    return data.name.toLowerCase().includes(filter);
}
  displayedColumns: string[] = ['position', 'name', 'skill'];

  @ViewChild(MatPaginator) paginator?: MatPaginator;;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.filterPredicate = this.filterPredicate;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  public doFilter = (event: any) => {
    let value = event?.value.trim().toLowerCase();
    this.dataSource.filter = value
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
