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
  color: 0xff6347, //   0X IS A HEXADECIMAL value
  wireframe: true, // shows its geometry
});
```

- if you want to add light you can use a meshstanderdmaterial.which takes in light properties.click to follow thorught to the [section](#adding-light).

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
// call animate.
animate();
```

## Now to animate the shape.

- So every shae we create has different properties like shape ,rotation , scale e.t.c. and if we change the properties inside the loop the shape will animate.

```js
function animate() {
  requestAnimationFrame(animate);
  // Now we shall update the x y and z postiotions for every animation frame.
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  renderer.render(scene, camera);
}
// So back in the browser you should see the shape animating.
animate();
```

### Adding Light.

- There are many lights in three.js but the best to get started with is a [point light](https://threejs.org/docs/index.html#examples/en/lights/LightProbeGenerator) which emits light in all directions like a light bulb💡.

```js
const material = new THREE.MeshStandardMaterial({
  color: 0xff6347,
  // wireframe: true,
});

const torus = new THREE.Mesh(geometry, material);
scene.add(torus);
// create the point light.
const pointlight = new THREE.PointLight(0xffffff);
// we move the light away from the center
// the smaller the value the closer the light
pointlight.position.set(5, 5, 5);
// add the light to the Scene
scene.add(pointlight);
```

![With Point Light(5,5,5)](./src/assets/images/docs/withpoint.png)
![With Point Light (20,20,20)](./src/assets/images/docs/withpoint20.png)

- But if you want the whole scene lit up you can use na Ambient light.

```js
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight, ambientLight);
```

![With ambient and point light](./src/assets/images/docs/with-abient.png)
