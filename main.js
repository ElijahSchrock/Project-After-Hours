import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Object3D } from 'three';

// //Item Box 1
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader = new GLTFLoader();
loader.load('3d-objects/dead_mans.glb', function(glb){
    const model = glb.scene;
    glb.scene.position.set(8, -2, -8);
    model.scale.set(22, 22, 22);
    model.position.x += 4;
    model.rotation.y += 5;
    scene.add(model);
    // return model;
}, function(xhr){ //function to give model loading progress
    console.log((xhr.loaded/xhr.total * 100) + '% loaded');
}, function(error){
    console.log('An error occurred')
}) 


const light = new THREE.DirectionalLight(0xffffff, 2)
light.position.set(0, 0, 1)
scene.add(light)

const backLight = new THREE.DirectionalLight(0xffffff, 2);
backLight.position.set(0, 0, -1);
scene.add(backLight);

const renderer = new THREE.WebGL1Renderer ();
renderer.setSize(202, 100, 100);
document.getElementById('appOne').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, -10)
controls.update();

camera.position.z = 5;

renderer.render(scene, camera);

//Animation Function
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate();

// //Item Box 2
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader2 = new GLTFLoader();
loader2.load('3d-objects/dead_mans.glb', function(glb){
    const model = glb.scene;
    glb.scene.position.set(8, -2, -8);
    model.scale.set(22, 22, 22);
    model.position.x += 4;
    model.rotation.y += 5;
    scene2.add(model);
    // return model;
}, function(xhr){ //function to give model loading progress
    console.log((xhr.loaded/xhr.total * 100) + '% loaded');
}, function(error){
    console.log('An error occurred')
}) 

const light2 = new THREE.DirectionalLight(0xffffff, 2)
light2.position.set(0, 0, 1)
scene2.add(light2)

const backLight2 = new THREE.DirectionalLight(0xffffff, 2);
backLight2.position.set(0, 0, -1);
scene2.add(backLight2);

const renderer2 = new THREE.WebGL1Renderer ();
renderer2.setSize(202, 100, 100);
document.getElementById('appTwo').appendChild(renderer2.domElement);

const controls2 = new OrbitControls(camera2, renderer2.domElement);
controls2.target.set(0, 0, -10)
controls2.update();

camera2.position.z = 5;

renderer2.render(scene2, camera2);

//Animation Function
function animate2() {
    requestAnimationFrame(animate2);
    controls2.update();
    renderer2.render(scene2, camera2);
};

animate2();

// // //Item Box 3
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader3 = new GLTFLoader();
loader3.load('3d-objects/dead_mans.glb', function(glb){
    const model = glb.scene;
    glb.scene.position.set(8, -2, -8);
    model.scale.set(22, 22, 22);
    model.position.x += 4;
    model.rotation.y += 5;
    scene3.add(model);
    // return model;
}, function(xhr){ //function to give model loading progress
    console.log((xhr.loaded/xhr.total * 100) + '% loaded');
}, function(error){
    console.log('An error occurred')
}) 

const light3 = new THREE.DirectionalLight(0xffffff, 2)
light3.position.set(0, 0, 1)
scene3.add(light3)

const backLight3 = new THREE.DirectionalLight(0xffffff, 2);
backLight3.position.set(0, 0, -1);
scene3.add(backLight3);

const renderer3 = new THREE.WebGL1Renderer ();
renderer3.setSize(202, 100, 100);
document.getElementById('appThree').appendChild(renderer3.domElement);

const controls3 = new OrbitControls(camera3, renderer3.domElement);
controls3.target.set(0, 0, -10)
controls3.update();

camera3.position.z = 5;

renderer3.render(scene3, camera3);

//Animation Function
function animate3() {
    requestAnimationFrame(animate3);
    controls3.update();
    renderer3.render(scene3, camera3);
};

animate3();

// // //Item Box 4
const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader4 = new GLTFLoader();
loader4.load('3d-objects/dead_mans.glb', function(glb){
    const model = glb.scene;
    glb.scene.position.set(8, -2, -8);
    model.scale.set(22, 22, 22);
    model.position.x += 4;
    model.rotation.y += 5;
    scene4.add(model);
    // return model;
}, function(xhr){ //function to give model loading progress
    console.log((xhr.loaded/xhr.total * 100) + '% loaded');
}, function(error){
    console.log('An error occurred')
}) 

const light4 = new THREE.DirectionalLight(0xffffff, 2)
light4.position.set(0, 0, 1)
scene4.add(light4)

const backLight4 = new THREE.DirectionalLight(0xffffff, 2);
backLight4.position.set(0, 0, -1);
scene4.add(backLight4);

const renderer4 = new THREE.WebGL1Renderer ();
renderer4.setSize(202, 100, 100);
document.getElementById('appFour').appendChild(renderer4.domElement);

const controls4 = new OrbitControls(camera4, renderer4.domElement);
controls4.target.set(0, 0, -10)
controls4.update();

camera4.position.z = 5;

renderer4.render(scene4, camera4);

//Animation Function
function animate4() {
    requestAnimationFrame(animate4);
    controls4.update();
    renderer4.render(scene4, camera4);
};

animate4();

// // //Item Box 5
const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader5 = new GLTFLoader();
loader5.load('3d-objects/dead_mans.glb', function(glb){
    const model = glb.scene;
    glb.scene.position.set(8, -2, -8);
    model.scale.set(22, 22, 22);
    model.position.x += 4;
    model.rotation.y += 5;
    scene5.add(model);
    // return model;
}, function(xhr){ //function to give model loading progress
    console.log((xhr.loaded/xhr.total * 100) + '% loaded');
}, function(error){
    console.log('An error occurred')
}) 

const light5 = new THREE.DirectionalLight(0xffffff, 2)
light5.position.set(0, 0, 1)
scene5.add(light5)

const backLight5 = new THREE.DirectionalLight(0xffffff, 2);
backLight5.position.set(0, 0, -1);
scene5.add(backLight5);

const renderer5 = new THREE.WebGL1Renderer ();
renderer5.setSize(202, 100, 100);
document.getElementById('appFive').appendChild(renderer5.domElement);

const controls5 = new OrbitControls(camera5, renderer5.domElement);
controls5.target.set(0, 0, -10)
controls5.update();

camera5.position.z = 5;

renderer5.render(scene5, camera5);

//Animation Function
function animate5() {
    requestAnimationFrame(animate5);
    controls5.update();
    renderer5.render(scene5, camera5);
};

animate5();