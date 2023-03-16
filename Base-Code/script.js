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