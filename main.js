import './style.css'
import * as THREE from 'three';


//Item Box 1
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer ();

renderer.setSize(202, 100, 100);
document.getElementById('app').appendChild(renderer.domElement)



//Item Box 2
const renderer2 = new THREE.WebGL1Renderer();
renderer2.setSize(202, 100, 100);
document.getElementById('app2').appendChild(renderer2.domElement)

//Item Box 3
const renderer3 = new THREE.WebGL1Renderer();
renderer3.setSize(202, 100, 100);
document.getElementById('app3').appendChild(renderer3.domElement)


//Item Box 4
const renderer4 = new THREE.WebGL1Renderer();
renderer4.setSize(202, 100, 100);
document.getElementById('app4').appendChild(renderer4.domElement)


//Item Box 5
const renderer5 = new THREE.WebGL1Renderer();
renderer5.setSize(202, 100, 100);
document.getElementById('app5').appendChild(renderer5.domElement)




console.log(scene)
console.log(camera)
console.log(renderer)
