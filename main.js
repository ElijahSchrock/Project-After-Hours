import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGL1Renderer ();
const renderer2 = new THREE.WebGL1Renderer();
const renderer3 = new THREE.WebGL1Renderer();
const renderer4 = new THREE.WebGL1Renderer();
const renderer5 = new THREE.WebGL1Renderer();

console.log(scene)
console.log(camera)
console.log(renderer)

renderer.setSize(202, 100, 100);
document.getElementById('app').appendChild(renderer.domElement)

renderer2.setSize(202, 100, 100);
document.getElementById('app2').appendChild(renderer2.domElement)


renderer3.setSize(202, 100, 100);
document.getElementById('app3').appendChild(renderer3.domElement)

renderer4.setSize(202, 100, 100);
document.getElementById('app4').appendChild(renderer4.domElement)

renderer5.setSize(202, 100, 100);
document.getElementById('app5').appendChild(renderer5.domElement)