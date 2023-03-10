/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/friend_smol_faces_rounded.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={2}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Cube001_4.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_5.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Cube001_6.geometry}
          material={materials["Material.006"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/friend_smol_faces_rounded.glb");