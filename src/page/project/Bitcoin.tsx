/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/bitcoin.glb --types --transform 
Files: public/bitcoin.glb [2.17MB] > C:\Users\franc\Desktop\Works\2023Dec\dec\bitcoin-transformed.glb [190.72KB] (91%)
Author: arthur (https://sketchfab.com/Arthur_mf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/bitcoin-974eb93e7e1346e8a18086b4e6529703
Title: Bitcoin
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type ActionName = 'actionNameOne' | 'actionNameTwo';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

interface MyGLTFResult extends GLTFResult {
  animations: GLTFAction[];
}

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function ModelCoin(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/bitcoin-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        position={[4.439, 2.426, 1.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.409}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials['Material.002']}
        position={[4.373, 2.426, 1.481]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={2.409}
      />
    </group>
  );
}

useGLTF.preload('/bitcoin-transformed.glb');