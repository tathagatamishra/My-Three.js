<h1 align="center">
My Three.js
<br><br>
  <img src="https://user-images.githubusercontent.com/114053180/225541787-b37ac97f-5d91-4d58-9434-e5004bdfa856.png" width=50>
  <img src="https://user-images.githubusercontent.com/114053180/225541798-4cc725ac-e4cb-4385-a949-8653be92ca1d.png" width=50>
  <img src="https://user-images.githubusercontent.com/114053180/225541800-aaaf95c9-85fc-40c5-b010-534aeabf5531.png" width=50>
  <img src="https://user-images.githubusercontent.com/114053180/225541794-053c5ee6-1d75-4f1c-94c4-b939f06b39a0.png" width=50>
<br><br>
</h1>

### Go to the `Base-Code` folder to start with this https://threejs-basic-setup.netlify.app/

## OR

<h4> Follow these steps to create the most basic Three.js project </h4>

_step 1_

```bash

  npm init vite

```

```yml

  // choose a project & package name
  // choose Vanilla
  // choose JavaScript

```

_step 2_

```bash

  cd Base-Code
  npm install
  npm run dev

```

```yml

  // keep node_modules, package.json & package-lock.json

  // delete everything

  // create these three files --> 
  // index.html 
  // style.css 
  // script.js

```

<br>

_step 3_
## HTML
```html

  // add a canvas element

  <canvas></canvas>

  // connect Javascript with HTML & set the type = module

  <script type="module" src="/main.js"></script>

```

<br>

_step 4_
## CSS
```css
  /* add simple CSS & connect it with HTML */

  * {
    margin: 0;
    padding: 0;
  }
  
  html,
  body {
    overflow: hidden;
  }
  
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
  }

```

<br>

_step 5_
```bash

  ctrl c

  npm i three

  npm run dev

```

<br>

_step 6_
## Three.js
```js

import * as THREE from 'three'



// ----------------------------------------
// Base Setup = Scene + Camera + Renderer


// Scene
const room = new THREE.Scene()


// Camera
const camera = new THREE.PerspectiveCamera()

camera.position.z = 5

room.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({canvas:document.querySelector('canvas')})

renderer.setSize(720,720)




// ----------------------------------------
// Create & Add some objects, Lights in the Room


// A Box
const box = new THREE.BoxGeometry()


// This is a 'Glow in Dark' paint
const paint = new THREE.MeshBasicMaterial({ color: 'red' })


// Apply the paint to the box
const coloredBox = new THREE.Mesh(box, paint)


// Bring the box inside the Room
room.add(coloredBox)





// ----------------------------------------
// Final Line

renderer.render(room, camera)

```
