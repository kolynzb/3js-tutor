import "../styles/bruno.css";
import * as THREE from "three";

const scene = new THREE.Scene();
const aspectRatio: number = window.innerWidth / window.innerHeight;
// By default every object is at the center of the scene.
// const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
// const camera = new THREE.PerspectiveCamera(fov?: number | undefined, aspect?: number | undefined, near?: number | undefined, far?: number | undefined);

const camera = new THREE.PerspectiveCamera(45, aspectRatio);
// so in 3js there are three coordinates used to map the position of an object which are x- horizontal,y - vertical and z- forward or backward
// so here we move the camera further away from the center.
camera.position.z = 3;
camera.position.x = -1;
scene.add(camera);

// A mesh is an object we can see composed of geometry and material
// Geometry is how many points you can see (points that compose geometry)e.g box geometry.
// BoxGeometry(width,height,depth) so this creates the points for the boxin the scene
// const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 20);
// you can create on texture loader and load as many textures as you want.
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load(
  "https://bruno-simon.com/prismic/matcaps/8.png"
);
// Material is how the geometry will look once its inside the scene.This can be a color or texture
//  The color format can be written in hex 0xfff000 or in a string "#fff"
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const material = new THREE.MeshMatcapMaterial({
  color: 0xff0000,
  matcap: matcapTexture,
});
// Shaders are used to create custom materials.
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
// rotaing the mesh along the y axis
mesh.rotation.y = 0.5; // 0.5 is in radians --> Math.pi / 4

// This helps to render the stuff to the screen if you dont pass a canvas it will create one automaticatilly but you have to addit to the dom.
const renderer = new THREE.WebGLRenderer({
  alpha: true, //this makes the background transparent. we use it when we want a custom back ground but 3js gives us a black background by default.
});
// we set the size of the render.
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);
// A render is like taking a photo.
// soo this is like taking one photo of the scene through our camera.

// Animating stuff is like taking a picture on each frame.

//store the x and y values of the cursor in this object
type Cursor = { x: number; y: number };
let cursor: Cursor = { x: 0, y: 0 };

// listen to mouse events on the Cursor
window.addEventListener("mousemove", (e: MouseEvent) => {
  cursor.x = e.clientX / window.innerWidth - 0.5; //make it between 0 and 1 by dividing by the inner height.  we subract 0.5 so we get a varible close to zero at the center -0.5 to left and 0.5 to the right.
  cursor.y = e.clientY / window.innerHeight - 0.5; // going up in three js is negaative
});
const tick = () => {
  window.requestAnimationFrame(tick);
  mesh.rotation.y += 0.01;
  const cameraX = cursor.x - 1;
  const cameraY = -cursor.y;

  camera.position.x += (cameraX - camera.position.x) / 10;
  camera.position.y += (cameraY - camera.position.y) / 10;
  // to make an ease in animation the camera must move a 1/10th of the distance at every frame render

  renderer.render(scene, camera);
};

tick();
