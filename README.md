# Three js tutorial

- Js library for rendering 3d in the browser ([click to visit documentation](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene).)

# Terms

- **Scene**
  Object that contains all yor cameras and lights.think of it as a container.
  `const scene = new THREE.Scene();`
- **Camera**
  - This is what we use to look at things inside the scene.There various types of cameras but the most common is the perspective camera which is designed to mimic what humans see.
    `const camera = new THREE.PerspectiveCamera()`
