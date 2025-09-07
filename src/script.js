import * as THREE  from  "three" // writing it like this because it's being imported from ES modules

// canvas
// this gets your canvas element from the page 
const mycanvas = document.querySelector("canvas.webgl")

// scenes 
const scene = new THREE.Scene();


// -------- Object ----------
// geometry
// width, height, depth <- parameters
const geometry = new THREE.BoxGeometry (1,1,1)

// material
// parameters sent as object 
const material = new THREE.MeshBasicMaterial({color: "red"})

// mesh
// now create a mesh to render the geometry with the material
const mesh = new THREE.Mesh(geometry, material)
// --------------------------
scene.add(mesh)

// camera
// going to use a simple PrespectiveCamera, whos parameters
// are "Field of View - degrees - Vertical" and "Aspect Ratio - width/height"

const sizes = {
    width: 800,
    height: 600,
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // this is a threeJS object
camera.position.z = 13 // this is a JS object
camera.position.y = 5
camera.position.x = 7
scene.add(camera)


// Renderer
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





