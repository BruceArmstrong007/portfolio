import { Component, OnInit, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThreeComponent {
  @ViewChild("cmp") container : any;
  scene : any;
  camera : any;
  renderer : any;
  controls : any;
  clock : any;
  composer : any;
  glitchPass : any;
  animate : any;
  SEPARATION = 200;
  AMOUNTX = 500;
  AMOUNTY = 500;
  particles : any;
  count = 0;
  r = 0;
  g = 0;
  b = 0;
  constructor() {
   }


   ngAfterViewInit() {

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color("rgb("+this.r+","+this.g+","+this.b+")");
    this.camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
    this.camera.position.y = 1000;
    this.clock = new THREE.Clock();
    this.renderer = new THREE.WebGLRenderer({antialias:true, alpha: true });
    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);
    this.container.nativeElement.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 1;
    this.controls.enableDamping = true;
    this.controls.enablePan = false;
    this.controls.enableRotate = false;
    this.controls.enableZoom = false;


    this.setWaves();
    this.animateFrames();

    // setInterval(()=>{
    //   let random = Math.random();
    //   this.r = Math.floor(random*(150 - 50));
    //   this.g = Math.floor(random*(150 - 50));
    //   this.b = Math.floor(random*(150 - 50));
    //   this.scene.background = new THREE.Color("rgb("+this.r+","+this.g+","+this.b+")");
    // }, 600)
  }

    animateFrames() {
      window.requestAnimationFrame(() => this.animateFrames());
      this.renderer.render(this.scene,this.camera);
      this.controls.update();
      this.waveUpdate();
      const time = this.clock.getElapsedTime();
  }


  setWaves(){
    let numParticles = this.AMOUNTX * this.AMOUNTY;
    let positions = new Float32Array(numParticles*3);
    let scales = new Float32Array(numParticles);
    let i = 0, j = 0;
    for(let ix = 0; ix < this.AMOUNTX; ix ++){
      for(let iy = 0; iy < this.AMOUNTY; iy ++){
        positions[ i ] = ix * this.SEPARATION - ((this.AMOUNTX * this.SEPARATION) / 2); // x
        positions[ i + 1 ] = 0; // y
        positions[ i + 2 ] = iy * this.SEPARATION - ((this.AMOUNTY * this.SEPARATION) / 2); // z
        scales[ j ] = 1;
        i += 3;
        j ++;
      }
    }
    let geometry = new THREE.BufferGeometry();
    let vertex : any = document.getElementById('vertexshader')?.textContent;
    let fragment : any = document.getElementById('fragmentshader')?.textContent;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
    geometry.setAttribute('scale',new THREE.BufferAttribute(scales,1));
    let material = new THREE.ShaderMaterial({
      uniforms: {
        color: {value: new THREE.Color(0xffffff)},
      },
      vertexShader: vertex,
      fragmentShader: fragment
    });
    this.particles = new THREE.Points(geometry,material);
    this.scene.add(this.particles);
  }

  waveUpdate(){
    let i = 0, j = 0;
    const positions = this.particles.geometry.attributes.position.array;
    const scales = this.particles.geometry.attributes.scale.array;
    for (let ix = 0; ix < this.AMOUNTX; ix++) {
      for (let iy = 0; iy < this.AMOUNTY; iy++) {
        positions[i+1] = (Math.sin((ix + this.count) * 0.3) * 10) +
                (Math.sin((iy + this.count) * 0.5) * 10);
                scales[j] = (Math.sin((ix + this.count) * 0.3) + 1) * 6 +
                (Math.sin((iy + this.count) * 0.5) + 1) * 6;
        i += 3;
        j ++;
      }
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
    this.particles.geometry.attributes.scale.needsUpdate = true;
    this.count += 0.1;
  }

  @HostListener('window:resize', ['$event']) onResize(event : any) {
    this.camera.aspect = this.container.nativeElement.offsetWidth / this.container.nativeElement.offsetHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.nativeElement.offsetWidth, this.container.nativeElement.offsetHeight);
  }



}
