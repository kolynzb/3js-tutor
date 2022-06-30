# Three js tutorial

- Js library for rendering 3d in the browser ([click to visit documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).)

# Terms

- **Scene**
  Object that contains all yor cameras and lights.think of it as a container.
  `const scene = new THREE.Scene();`
- **Camera**
  - This is what we use to look at things inside the scene.There various types of cameras but the most common is the perspective camera which is designed to mimic what humans see.
    `const camera = new THREE.PerspectiveCamera()`
    `const camera = new THREE.PerspectiveCamera()`
  - its first argument is _field of view_ which is the amount of the world thats visible based on a full 360deg.
  <figure>
  <img src="./src/assets/images/docs/fieldofview.png" align="center" />
  <caption>Field of View</caption>
  </figure>
  - Its Second Arguement is **Aspect Ratio** which is based on the users browser window.(_We can get this by dividing the width of the widow by the height_).
  - The remaining arguements are for the _View Frustram_
  <figure>
  <img src="./src/assets/images/docs/viewFrustrum.png" align="center" />
  <caption>Field of View</caption>
  </figure>
