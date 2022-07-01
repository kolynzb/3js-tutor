import "../styles/bruno.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const aspectRatio: number = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
scene.add(camera);

// A mesh is an object we can see composed of geometry and material
// Geometry is how many points you can see (points that compose geometry)e.g box geometry.
// BoxGeometry(width,height,depth) so this creates the points for the boxin the scene
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Material is how the geometry will look once its inside the scene.This can be a color or texture
//  The color format can be written in hex 0xfff000 or in a string "#fff"
const material = new THREE.MeshBasicMaterial({ color: 0xff000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// This helps to render the stuff to the screen if you dont pass a canvas it will create one automaticatilly but you have to addit to the dom.
const renderer = new THREE.WebGLRenderer({});
// we set the size of the render.
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);
// A render is like taking a photo.
// soo this is like taking one photo of the scene through our camera.
renderer.render(scene, camera);
