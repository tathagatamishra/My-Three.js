import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



// ----------------------------------------

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



// Scene
const room = new THREE.Scene()


// Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 10000)
camera.position.x = 3
camera.position.y = 2
camera.position.z = 3

room.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))




// ----------------------------------------


// Objects

const box = new THREE.BoxBufferGeometry(1, 1, 1)

const paint = new THREE.MeshStandardMaterial({ color: '#9e9e9e' })

const coloredBox = new THREE.Mesh(box, paint)

room.add(coloredBox)



// Lights

const light = new THREE.PointLight({ color: 'white' })
light.position.set(-2, 3, 2)

room.add(light)


const ambLight = new THREE.AmbientLight({ color: 'white' })
ambLight.intensity = 0.31

room.add(ambLight)




// ----------------------------------------

// Helpers

const xyzAxis = new THREE.AxesHelper(5000)
room.add(xyzAxis)

const floor = new THREE.GridHelper(10000, 10000, '#737373', '#525252')
room.add(floor)



// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true



// Animate

const tick = () => {

    // Update controls
    controls.update()

    // Render
    renderer.render(room, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()




// ---------------------------------------


// Responsive window

window.addEventListener('resize', () => {

    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})