import React, { Component } from 'react';
import * as THREE from 'three';

class First extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }
  SCENE_PARAMS = {
    WIDTH: 400,
    HEIGHT: 300
  }
  componentDidMount() {
    console.log('this.canvas', this.canvas);
    const CAMERA_PARAMS = {
      VIEW_ANGLE: 45,
      ASPECT: this.SCENE_PARAMS.WIDTH / this.SCENE_PARAMS.HEIGHT,
      NEAR: 0.1,
      FAR: 10000
    }
    
    let renderer = new THREE.WebGLRenderer({
      canvas: this.canvas.current,
      antialias: true
    });
    let camera = new THREE.PerspectiveCamera(
      CAMERA_PARAMS.VIEW_ANGLE,
      CAMERA_PARAMS.ASPECT,
      CAMERA_PARAMS.NEAR,
      CAMERA_PARAMS.FAR
    );
    let scene = new THREE.Scene();
    
    // scene.add(camera);
    camera.position.z = 300;
    // renderer.setSize(SCENE_PARAMS.WIDTH, SCENE_PARAMS.HEIGHT);
    
    // $('#container').append(renderer.domElement);
    // this.refs.canvas.appendChild(renderer.domElement);
    // document.body.appendChild(renderer.domElement);
    
    const SPHERE_PARAMS = {
      RADIUS: 50,
      SEGMENTS: 16,
      RINGS: 16
    }
    let sphereMaterial = new THREE.MeshLambertMaterial({ color: 0xCC0000 });
    let sphere = new THREE.Mesh(
      new THREE.SphereGeometry(
        SPHERE_PARAMS.RADIUS,
        SPHERE_PARAMS.SEGMENTS,
        SPHERE_PARAMS.RINGS
      ),
      sphereMaterial
    )
    
    scene.add(sphere);
    
    let pointLight = new THREE.PointLight(0xFFFFFF);
    pointLight.position.x = 10;
    pointLight.position.y = 50;
    pointLight.position.z = 130;
    scene.add(pointLight);
    
    renderer.render(scene, camera);
  }
  render() {
    return (
      <div className="App">
        {/* <canvas ref={dom => this.canvas = dom} width="400" height="300"></canvas> */}
        <canvas ref={this.canvas} width={this.SCENE_PARAMS.WIDTH} height={this.SCENE_PARAMS.HEIGHT}></canvas>
      </div>
    );
  }
}

export default First;
