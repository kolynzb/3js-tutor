# Three js tutorial

- Js library for rendering 3d in the browser ([click to visit documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).)

# Terms

- **Scene**
  Object that contains all yor cameras and lights.think of it as a container.
  `const scene = new THREE.Scene();`
- **Camera**

  - This is what we use to look at things inside the scene.There various types of cameras but the most common is the [perspective camera](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) which is designed to mimic what humans see.
    `const camera = new THREE.PerspectiveCamera()`
    `const camera = new THREE.PerspectiveCamera(75, aspectRatio,0.1,100);`
  - its first argument is _field of view_ which is the amount of the world thats visible based on a full 360deg.
  <figure>
  <img src="./src/assets/images/docs/fieldofview.png" align="center" width="200" />
  <caption>Field of View</caption>
  </figure>
  - Its Second Arguement is **Aspect Ratio** which is based on the users browser window.(_We can get this by dividing the width of the widow by the height_).
  - The remaining arguements are for the _View Frustram_.Contraols which objects are visible relative to the camera.
  <figure>
  <img src="./src/assets/images/docs/viewFrustrum.png" align="center" width="200"/>
  <caption>Field of View</caption>
  </figure>
  - **Renderer**
    Renders the graphics to the scene.Rendering is basically drawing.

  ```js
  //select canvas
  const bgCanvas = document.querySelector("#bg");
  // create a renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
  });
  // set pixel ratio to the window Pixel ratio
  renderer.setPixelRatio(window.devicePixelRatio);
  // set renderer size to the windows size
  renderer.setSize(window.innerWidth, window.innerHeight);
  //but currently the camera is positioned in the middle of the scene so we move it on the z axis --->this will give us a better perspective when we start adding shapes
  camera.position.setZ(30);

  // call the renderer method and pass the scene and camera as an arguement. This is like telling it to draw on the scene.
  renderer.render(scene, camera);
  ```

# Adding an objects

- There are 3 basic steps to add an object to the scene.

1. **Geometry**

- First you will need a geometry of a set of vectors that define the object its self ().But Three.js has prebuilt [geometries](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)

2. **Material**

- This is basically the wrapping paper of the object.This can be a texture but there are many prebuilt [materials](https://threejs.org/docs/index.html#api/en/materials/Material) included in three.js.Note that you can write your custom shaders using webgl.

```js
// Add  Ring
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// Most materials require a light source but the basic ones dont
const material = new THREE.MeshBasicMaterial({
  color: 0xff6347,
  wireframe: true, // shows its geometry
});
```

3. **Mesh**

- This is pretty much combining the geometry with the material.

```js
const torus = new THREE.Mesh(geometry, material);
// To add the shape to the scene
scene.add(torus);
// now to see it we need to rerender the scene on the page
renderer.render(scene, camera);
```

- At this point You should see this.
<figure>
  <img src="./src/assets/images/docs/torus.png" align="center" width="500" alt="torus image"/>
</figure>
- _Quick tip_: to prevent you from rerendering the scene recurcively.use this

```js
function animate() {
  // THis tells the browser that your going to animate something.
  requestAnimationFrame(animate);
  // so that every time the browser repaints the screen it calls ypur render method
  renderer.render(scene, camera);
  //   you can think of this as a gameloop.
}
```
