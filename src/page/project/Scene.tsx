/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 benz/scene.gltf --types --transform 
Files: benz/scene.gltf [40.77KB] > C:\Users\franc\Desktop\Works\2023Dec\dec\scene-transformed.glb [67.95KB] (-67%)
Author: Lexyc16 (https://sketchfab.com/Lexyc16)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mercedes-benz-g-class-w263-1a2a52b16cad4e618af347461817895c
Title: Mercedes Benz G-class W263
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
    Object_5: THREE.Mesh;
    Object_6: THREE.Mesh;
    Object_7: THREE.Mesh;
    Object_8: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_10: THREE.Mesh;
    Object_11: THREE.Mesh;
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshPhysicalMaterial;
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshPhysicalMaterial;
    PaletteMaterial004: THREE.MeshStandardMaterial;
    PaletteMaterial005: THREE.MeshPhysicalMaterial;
    PaletteMaterial006: THREE.MeshStandardMaterial;
    PaletteMaterial007: THREE.MeshStandardMaterial;
    PaletteMaterial008: THREE.MeshStandardMaterial;
    PaletteMaterial009: THREE.MeshStandardMaterial;
    ['Material.015']: THREE.MeshPhysicalMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.PaletteMaterial002}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.PaletteMaterial003}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.PaletteMaterial004}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.PaletteMaterial005}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials.PaletteMaterial006}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials.PaletteMaterial007}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials.PaletteMaterial008}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials.PaletteMaterial009}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials['Material.015']}
        position={[0.008, 1.037, 0.883]}
        //added
      />
    </group>
  );
}

useGLTF.preload('/scene-transformed.glb');
