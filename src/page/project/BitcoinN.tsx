/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/bitcoinN.glb --types --transform 
Files: public/bitcoinN.glb [3.6MB] > C:\Users\franc\Desktop\Works\2023Dec\dec\bitcoinN-transformed.glb [534.03KB] (85%)
Author: Karolina Renkiewicz (https://sketchfab.com/KarolinaRenkiewicz)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/bitcoin-ff17dab54b044d789d05ae7c8dfb9808
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
    Cylinder002__0: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function ModelCoinN(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/bitcoinN-transformed.glb'
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder002__0.geometry}
        material={materials['Scene_-_Root']}
        position={[-3.489, 36.23, -11.294]}
      />
    </group>
  );
}

useGLTF.preload('/bitcoinN-transformed.glb');
