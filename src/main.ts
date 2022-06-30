import "./styles/index.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const aspectRatio: number = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
const bgCanvas: Element = document.querySelector("#bg")!;

const renderer = new THREE.WebGLRenderer({
  canvas: bgCanvas,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
renderer.render(scene, camera);
