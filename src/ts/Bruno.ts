import "../styles/bruno.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const aspectRatio: number = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
const bgCanvas: Element = document.querySelector("#bruno")!;

scene.add(camera);

// A mesh is an object we can see
// Geometry is how many points you can see e.g box geometry.
// Material
const geometry = new THREE.BoxGeometry();

// Material

// const cube = new THREE.();
const renderer = new THREE.WebGLRenderer({
  canvas: bgCanvas,
});
