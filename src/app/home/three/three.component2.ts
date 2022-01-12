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
 stars : Array<any> = [];

  constructor() {   }


   ngAfterViewInit() {

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    this.renderer = new THREE.WebGLRenderer();


    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);


    this.container.nativeElement.appendChild(this.renderer.domElement);

    this.camera.position.z = 5;

    this.addSphere();
    this.animate();
  }

    animate() {
      window.requestAnimationFrame(() => this.animate());

    this.renderer.render( this.scene, this.camera );
    this.animateStars();
  }


	 addSphere(){

    var geometry   = new THREE.SphereGeometry(0.4, 32, 32)
    var material = new THREE.MeshBasicMaterial( );

    // The loop will move from z position of -1000 to z position 1000, adding a random particle at each position.
    for ( var z= -1000; z < 1000; z+=20 ) {

      // Make a sphere (exactly the same as before).
      var sphere = new THREE.Mesh(geometry, material)

      // This time we give the sphere random x and y positions between -500 and 500
      sphere.position.x = Math.random() * 1000 - 500;
      sphere.position.y = Math.random() * 1000 - 500;

      // Then set the z position to where it is in the loop (distance of camera)
      sphere.position.z = z;

      // scale it up a bit
      sphere.scale.x = sphere.scale.y = 2;

      //add the sphere to the scene
      this.scene.add( sphere );

      //finally push it to the stars array
      this.stars.push(sphere);
    }
}

 animateStars() {

// loop through each star
for(var i=0; i<this.stars.length; i++) {

  var star = this.stars[i];

  // and move it forward dependent on the mouseY position.
  star.position.z +=  i/10;

  // if the particle is too close move it to the back
  if(star.position.z>1000) star.position.z-=2000;

}

}



  @HostListener('window:resize', ['$event']) onResize(event : any) {
    this.camera.aspect = this.container.nativeElement.offsetWidth / this.container.nativeElement.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);
  }


  ngOnInit(): void {
  }


}
