import './style.css'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Object3D } from 'three';


 let positions = [
    {
        'source': '3d-objects/dead_mans.glb',
        'sceneX': 8,
        'sceneY': -1,
        'sceneZ': 8,
        'scaleX': 22,
        'scaleY': 22,
        'scaleZ': 22,
        'modelX': 4,
        'modelRot': 5 
    },
    {
        'source': '3d-objects/crimson_black.glb',
        'sceneX': 0,
        'sceneY': 0,
        'sceneZ': 0,
        'scaleX': 22,
        'scaleY': 22,
        'scaleZ': 22,
        'modelX': 4,
        'modelRot': 5 
    },
    {
        'source': '3d-objects/Engram.glb',
        'sceneX': 0,
        'sceneY': 0,
        'sceneZ': 0,
        'scaleX': 0.02,
        'scaleY': 0.02,
        'scaleZ': 0.02,
        'modelX': 0.5,
        'modelRot': 5 
     },
     {
        'source': '3d-objects/Kindled_Orchid.glb',
        'sceneX': 0,
        'sceneY': 0,
        'sceneZ': 0,
        'scaleX': 2.5,
        'scaleY': 2.5,
        'scaleZ': 2.5,
        'modelX': 0.5,
        'modelRot': 5 
     },
     {
        'source': '3d-objects/sunshot.glb',
        'sceneX': 2,
        'sceneY': 2,
        'sceneZ': 2,
        'scaleX': 1,
        'scaleY': 1,
        'scaleZ': 1,
        'modelX': 4,
        'modelRot': 3 
     }
]



function model (divName, positions, callBack) {
    
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);

const loader = new GLTFLoader();
    loader.load(positions.source, function(glb){
        const model = glb.scene;
        glb.scene.position.set(positions.sceneX, positions.sceneY, positions.sceneZ);
        model.scale.set(positions.scaleX, positions.scaleY,  positions.scaleZ); 
        model.position.x += positions.modelX;
         model.rotation.y += positions.modelRot;
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
    document.getElementById(divName).appendChild(renderer.domElement);
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

const divNames = [
    'appOne',
    'appTwo',
    'appThree',
    'appFour',
    'appFive'
]

function callBack (positions) {
    for(let i = 0; i < positions.length; i++){
            model(divNames[i], positions[i])
        }
}

callBack(positions);