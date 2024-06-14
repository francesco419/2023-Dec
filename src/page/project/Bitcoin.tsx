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
import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

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

type tempType = {
  num: number;
  props: JSX.IntrinsicElements['group'];
};

function ModelCoin({ props, num }: tempType) {
  const groupRef = useRef<Group>(null);
  const [ent, setEnt] = useState<number>(10);

  useEffect(() => {
    console.log(num);
  }, [ent]);

  useFrame((state, delta) => {
    console.log('useFrame' + ent);
    let rotation = groupRef.current?.rotation;
    if (rotation) {
      rotation.x = ent;
    }
  });

  const { nodes, materials } = useGLTF(
    '/bitcoin-transformed.glb'
  ) as GLTFResult;

  return (
    <group
      {...props}
      dispose={null}
      onPointerEnter={() => {
        setEnt((ent) => ent + 10);
      }}
    >
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials['Material.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

export const CoinMemo = React.memo(ModelCoin);

useGLTF.preload('/bitcoin-transformed.glb');
