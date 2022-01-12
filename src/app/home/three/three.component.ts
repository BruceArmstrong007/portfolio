import { Component, OnInit, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThreeComponent implements OnInit {
  @ViewChild("cmp") container : any;
 scene :any;
 camera :any;
 renderer :any;
  LINE_COUNT = 1500;
pa : any;
va : any;
pos: any;
r = 50;
g = 50;
b = 50;
  constructor() {   }


   ngAfterViewInit() {

    this.scene = new THREE.Scene();


    this.scene.background = new THREE.Color("rgb(50,50,50)");

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer({antialias:true});

    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);


    this.container.nativeElement.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;
    let geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(new Float32Array(6*this.LINE_COUNT), 3));
    geom.setAttribute("velocity", new THREE.BufferAttribute(new Float32Array(2*this.LINE_COUNT), 1));
    this.pos = geom.getAttribute("position");
    this.pa  = this.pos.array;
    let vel = geom.getAttribute("velocity");
    this.va = vel.array;

        for (let line_index= 0; line_index < this.LINE_COUNT; line_index++) {
            var x = Math.random() * 400 - 200;
            var y = Math.random() * 200 - 100;
            var z = Math.random() * 500 - 100;
            var xx = x;
            var yy = y;
            var zz = z;
            //line start
            this.pa[6*line_index] = x;
            this.pa[6*line_index+1] = y;
            this.pa[6*line_index+2] = z;
            //line end
            this.pa[6*line_index+3] = xx;
            this.pa[6*line_index+4] = yy;
            this.pa[6*line_index+5] = zz;

            this.va[2*line_index] = this.va[2*line_index+1]= 0;
        }
        let mat = new THREE.LineBasicMaterial({color: 0xffffff});
        let lines = new THREE.LineSegments(geom, mat);
        this.scene.add(lines);


    this.animate();

    setInterval(()=>{
      this.r = Math.floor(Math.random()*(150 - 50)+50);
      this.g = Math.floor(Math.random()*(150 - 50)+50);
      this.b = Math.floor(Math.random()*(150 - 50)+50);
      this.scene.background = new THREE.Color("rgb("+this.r+","+this.g+","+this.b+")");
    }, 500)
  }

    animate() {
      window.requestAnimationFrame(() => this.animate());

    this.renderer.render( this.scene, this.camera );

    for (let line_index= 0; line_index < this.LINE_COUNT; line_index++) {
      this.va[2*line_index] += 0.03;
      this.va[2*line_index+1] += 0.025;

      this.pa[6*line_index+2] += this.va[2*line_index];
      this.pa[6*line_index+5] += this.va[2*line_index+1];

      if(this.pa[6*line_index+5] > 200) {
          var z= Math.random() * 200 - 100;
          this.pa[6*line_index+2] = z;
          this.pa[6*line_index+5] = z;
          this.va[2*line_index] = 0;
          this.va[2*line_index+1] = 0;
      }
  }
  this.pos.needsUpdate = true;



  }




  @HostListener('window:resize', ['$event']) onResize(event : any) {
    this.camera.aspect = this.container.nativeElement.offsetWidth / this.container.nativeElement.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);
  }


  ngOnInit(): void {
  }


}
