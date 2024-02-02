import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const PlasterHead = () => {
    const gltf = useLoader(GLTFLoader, "./head/scene.gltf");
    return (
        <primitive object={gltf.scene} scale={0.5} position={[1.8, -1.5, 2]} rotation-y={-1} />
    );
}

export default PlasterHead