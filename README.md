<h1 align="center">My Three.js</h1>

### Go to the `Base Code` folder to start with

## OR

## Follow these steps to create the most basic Three.js project

```yml

  npm init vite

  // choose a project & package name
  // choose Vanilla
  // choose JavaScript

```

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

## HTML
```html

  // add a canvas element

  <canvas></canvas>

  // connect Javascript with HTML & set the type = module

  <script type="module" src="/main.js"></script>

```

<br>

## CSS
```css
  // add simple CSS & connect it with HTML

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

```bash

  ctrl c

  npm i three

  npm run dev

```

<br>

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
