import './style.css'
import * as THREE from 'three';

// //Item Box 1
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer ();
renderer.setSize(202, 100, 100);
document.getElementById('appOne').appendChild(renderer.domElement);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const mesh = new THREE.Mesh(boxGeometry, material);

scene.add(mesh);

camera.position.z = 5;

renderer.render(scene, camera);

//Animation Function
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
};

animate();

// //Item Box 2
const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer2 = new THREE.WebGL1Renderer ();
renderer2.setSize(202, 100, 100);
document.getElementById('appTwo').appendChild(renderer2.domElement);

const boxGeometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const mesh2 = new THREE.Mesh(boxGeometry2, material2);

scene2.add(mesh2);

camera2.position.z = 5;

renderer2.render(scene2, camera2);

//Animation Function
function animate2() {
    requestAnimationFrame(animate2);
    renderer2.render(scene2, camera2)
    mesh2.rotation.x += 0.01;
    mesh2.rotation.y += 0.01;
};

animate2();

// // //Item Box 3
const scene3 = new THREE.Scene();
const camera3 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer3 = new THREE.WebGL1Renderer ();
renderer3.setSize(202, 100, 100);
document.getElementById('appThree').appendChild(renderer3.domElement);

const boxGeometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const mesh3 = new THREE.Mesh(boxGeometry3, material3);

scene3.add(mesh3);

camera3.position.z = 5;

renderer3.render(scene3, camera3);

//Animation Function 
function animate3() {
    requestAnimationFrame(animate3);
    renderer3.render(scene3, camera3)
    mesh3.rotation.x += 0.01;
    mesh3.rotation.y += 0.01;
};

animate3()

// // //Item Box 4
const scene4 = new THREE.Scene();
const camera4 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer4 = new THREE.WebGL1Renderer ();
renderer4.setSize(202, 100, 100);
document.getElementById('appFour').appendChild(renderer4.domElement);

const boxGeometry4 = new THREE.BoxGeometry(1, 1, 1);
const material4 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const mesh4 = new THREE.Mesh(boxGeometry4, material4);

scene4.add(mesh4);

camera4.position.z = 5;

renderer4.render(scene4, camera4);

//Animation Function 
function animate4() {
    requestAnimationFrame(animate4);
    renderer4.render(scene4, camera4)
    mesh4.rotation.x += 0.01;
    mesh4.rotation.y += 0.01;
};

animate4();

// // //Item Box 5
const scene5 = new THREE.Scene();
const camera5 = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const renderer5 = new THREE.WebGL1Renderer ();
renderer5.setSize(202, 100, 100);
document.getElementById('appFive').appendChild(renderer5.domElement);

const boxGeometry5 = new THREE.BoxGeometry(1, 1, 1);
const material5 = new THREE.MeshBasicMaterial({color: 0x00ff00});
const mesh5 = new THREE.Mesh(boxGeometry5, material5);

scene5.add(mesh5);

camera5.position.z = 5;

renderer5.render(scene5, camera5);

//Animation Function
function animate5() {
    requestAnimationFrame(animate5);
    renderer5.render(scene5, camera5)
    mesh5.rotation.x += 0.01;
    mesh5.rotation.y += 0.01;
};

animate5();