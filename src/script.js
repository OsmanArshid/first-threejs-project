import * as THREE  from  "three" // writing it like this because it's being imported from ES modules

// --------- Canvas ----------------
// this gets your canvas element from the page 
const mycanvas = document.querySelector("canvas.webgl")


// ---------- Scene --------------- 
const scene = new THREE.Scene();


// ----------- Group and Object --------------

const group = new THREE.Group()

// instantiating the cube Mesh directly
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color : "blue"})
)
// add the cube to the scene
group.add(cube1)


// instantiating the cube Mesh directly
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color : "red"})
)
cube2.position.x = 1.6
// add the cube to the scene
group.add(cube2)


// instantiating the cube Mesh directly
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color : "green"})
)
cube3.position.x = -1.6
// add the cube to the scene
group.add(cube3)


group.position.set(0, 1, -0.5)
group.scale.y = 2
group.rotation.x = 3
// add the group to the scene
scene.add(group)

// ------------ Camera ------------
// camera will be an Object3D instance

// going to use a simple PrespectiveCamera, whos parameters
// are "Field of View - degrees - Vertical" and "Aspect Ratio - width/height"

const sizes = {
    width: 800,
    height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // this is a threeJS object <- more precise = Object3D 
camera.position.z = 3 // this is a JS object (Vector3 object)
camera.position.y = 0
camera.position.x = 0
scene.add(camera)
// ------------------------------------



// --------- Axes helper --------
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



// ---------- Renderer -----------
// Going to use the WebGLRenderer (because the best for rendering three.js)
// parameters also objects
const renderer = new THREE.WebGLRenderer(
    { canvas: mycanvas}
)

// now to resize the canvas - before this the cangvas was small
renderer.setSize(sizes.width, sizes.height)

// now make the render, finally
// parameters/sending it to scene and camera
renderer.render(scene, camera)
// ---------------------------------

