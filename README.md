# Three js tutorial

- Js library for rendering 3d in the browser ([click to visit documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).)

# Terms

- **Scene**
  Object that contains all yor cameras and lights.think of it as a container.
  `const scene = new THREE.Scene();`
- **Camera**

  - This is what we use to look at things inside the scene.There various types of cameras but the most common is the perspective camera which is designed to mimic what humans see.
    `const camera = new THREE.PerspectiveCamera()`
    `const camera = new THREE.PerspectiveCamera(75, aspectRatio,0.1,100);`
  - its first argument is _field of view_ which is the amount of the world thats visible based on a full 360deg.
  <figure>
  <img src="./src/assets/images/docs/fieldofview.png" align="center" />
  <caption>Field of View</caption>
  </figure>
  - Its Second Arguement is **Aspect Ratio** which is based on the users browser window.(_We can get this by dividing the width of the widow by the height_).
  - The remaining arguements are for the _View Frustram_.Contraols which objects are visible relative to the camera.
  <figure>
  <img src="./src/assets/images/docs/viewFrustrum.png" align="center" />
  <caption>Field of View</caption>
  </figure>
  - **renderer**
    Renders the graphics to the scene.

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
  ```
