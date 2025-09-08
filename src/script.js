import * as THREE  from  "three" // writing it like this because it's being imported from ES modules

// --------- Canvas ----------------
// this gets your canvas element from the page 
const mycanvas = document.querySelector("canvas.webgl")


// ---------- Scene --------------- 
const scene = new THREE.Scene();


// ----------- Object --------------
// geometry
// width, height, depth <- parameters
const geometry = new THREE.BoxGeometry (1,1,1)

// material
// parameters sent as object 
const material = new THREE.MeshBasicMaterial({color: "red"})

// mesh
// now create a mesh to render the geometry with the material
const mesh = new THREE.Mesh(geometry, material)

// position of mesh 
mesh.position.x = 1
mesh.position.y = -1
mesh.position.z = 0.3
// mesh.position.set(x, y, z) <<--- another way to set co-ordinates


// scale of mesh
mesh.scale.x = 2
mesh.scale.y = 0.7
mesh.scale.z = 0.5
// mesh.scale.set(x, y, z) <<--- another way to set scale


// rotation of mesh
mesh.rotation.reorder('YXZ') // <<--- telling explicitly that i want the to rotate in this order
// ^^^ if we wanna put reorder, do it before actually rotating

mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25

// --------------------------------------
scene.add(mesh)


// to find the distance between center of scene and object present
console.log("center to obj", mesh.position.length())

// brings the position vector to unit vector
mesh.position.normalize() 
console.log("normalized distance", mesh.position.length()) // <-- to 1


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

// if we want to look at some object (rotates the object so -z faces the target)
// "lookAt" takes in a '''Vector3 object <- tagret'''
camera.lookAt(mesh.position)


// to find the distance between the object object present in the scene and camera
// have to pass a parameter to "DistanceTo"
console.log("camera to obj", mesh.position.distanceTo(camera.position))



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



