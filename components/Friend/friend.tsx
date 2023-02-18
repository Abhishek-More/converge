import React from "react";
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { Model } from "./Model";
import { AmbientLight } from "three";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer } from "@react-three/postprocessing";


// https://dev.to/nourdinedev/how-to-use-threejs-and-react-to-render-a-3d-model-of-your-self-4kkf
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction

export default function Friend() {
  return (
    <div id="canvas-container" className="cursor-grab active:cursor-grabbing">
        <Canvas>
          <ambientLight intensity={4} color="#FFFFFF" />
          <OrbitControls enableZoom={false} enablePan={false} enableDamping={true} dampingFactor={0.01} autoRotate={true} autoRotateSpeed={2.0} minPolarAngle={Math.PI / 3} maxPolarAngle={2 * Math.PI / 3} />
          <Model />
        </Canvas>
    </div>
  );
}
