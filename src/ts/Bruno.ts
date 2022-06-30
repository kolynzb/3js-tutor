import "../styles/bruno.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const aspectRatio: number = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
const bgCanvas: Element = document.querySelector("#bruno")!;

const renderer = new THREE.WebGLRenderer({
  canvas: bgCanvas,
});
