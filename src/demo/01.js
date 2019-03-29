import THREE from 'three';

const SCENE_PARAMS = {
  WIDTH: 400,
  HEIGHT: 300
}
const CAMERA_PARAMS = {
  VIEW_ANGLE: 45,
  ASPECT: SCENE_PARAMS.WIDTH / SCENE_PARAMS.HEIGHT,
  NEAR: 0.1,
  FAR: 10000
}

let renderer = new THREE.WebGLRenderer();
let camera = new THREE.PerspectiveCamera(
  CAMERA_PARAMS.VIEW_ANGLE,
  CAMERA_PARAMS.ASPECT,
  CAMERA_PARAMS.NEAR,
  CAMERA_PARAMS.FAR
);
let scene = new THREE.Scene();

// scene.add(camera);
camera.position.z = 300;
renderer.setSize(SCENE_PARAMS.WIDTH, SCENE_PARAMS.HEIGHT);

// $('#container').append(renderer.domElement);

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