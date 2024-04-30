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
    Object_15: THREE.Mesh;
    Object_16: THREE.Mesh;
    Object_17: THREE.Mesh;
  };
  materials: {
    ['Material.001']: THREE.MeshPhysicalMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshPhysicalMaterial;
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.005']: THREE.MeshPhysicalMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.012']: THREE.MeshStandardMaterial;
    ['Material.013']: THREE.MeshStandardMaterial;
    ['Material.014']: THREE.MeshStandardMaterial;
    ['Material.015']: THREE.MeshPhysicalMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
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
        material={materials['Material.001']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials['Material.002']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials['Material.004']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials['Material.003']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials['Material.005']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials['Material.009']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_10.geometry}
        material={materials['Material.012']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials['Material.013']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_12.geometry}
        material={materials['Material.014']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials['Material.015']}
        position={[0.008, 1.037, 0.883]}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials['Material.006']}
        position={[-0.575, 0.615, 1.845]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.168}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials['Material.007']}
        position={[-0.575, 0.615, 1.845]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.168}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials['Material.008']}
        position={[-0.575, 0.615, 1.845]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.168}
      />
    </group>
  );
}

useGLTF.preload('public/scene-transformed.glb');
