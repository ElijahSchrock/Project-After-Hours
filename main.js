import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Object3D } from 'three';


function model (name, source, posX, posY, posZ, scaleX, scaleY, scaleZ, modelX, modelRot) {
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader = new GLTFLoader();
    loader.load(source, function(glb){
        const model = glb.scene;
        glb.scene.position.set(posX, posY, posZ);
        model.scale.set(scaleX, scaleY, scaleZ);
        model.position.x += modelX;
        model.rotation.y += modelRot;
        scene.add(model);
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
    document.getElementById(name).appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, -10)
    controls.update();

    camera.position.z = 6;


    renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
};

animate()
}

model('appOne', '3d-objects/dead_mans.glb', 8, -2, -8, 22, 22, 22, 4, 5);
model('appTwo', '3d-objects/crimson_black.glb', 0, 0, 0, 22, 22, 22, 4, 5);
model('appThree', '3d-objects/Engram.glb', 0, 0, 0, 0.02, 0.02, 0.02, 0, 5);
model('appFour', '3d-objects/Kindled_Orchid.glb', 0, 0, 0, 2.5, 2.5, 2.5, 0.5, 5);
model('appFive', '3d-objects/sunshot.glb', 2, 2, 2, 1, 1, 1, 4, 3);