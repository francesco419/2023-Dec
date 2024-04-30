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
    sw222_engine_2_sw222_main_alt_2_0: THREE.Mesh;
    sw222_mirror_L_sw222_paint_0: THREE.Mesh;
    sw222_mirror_L_sw222_glass_0: THREE.Mesh;
    sw222_taillightglass_R_2017_glass004_0: THREE.Mesh;
    sw222_taillightframe_R_2017_sw222_vehiclelights_0: THREE.Mesh;
  };
  materials: {
    PaletteMaterial001: THREE.MeshStandardMaterial;
    PaletteMaterial002: THREE.MeshPhysicalMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial004: THREE.MeshPhysicalMaterial;
    PaletteMaterial005: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/benz-transformed.glb') as GLTFResult;
  return (
    <>
      <group {...props} dispose={null}>
        <mesh
          geometry={nodes.sw222_engine_2_sw222_main_alt_2_0.geometry}
          material={materials.PaletteMaterial001}
          position={[-0.009, 0.765, 1.478]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.sw222_mirror_L_sw222_paint_0.geometry}
          material={materials.PaletteMaterial002}
          position={[0.933, 1.039, 0.427]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.sw222_mirror_L_sw222_glass_0.geometry}
          material={materials.PaletteMaterial003}
          position={[0.933, 1.039, 0.427]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={nodes.sw222_taillightglass_R_2017_glass004_0.geometry}
          material={materials.PaletteMaterial004}
          position={[-0.708, 0.855, -2.414]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          geometry={
            nodes.sw222_taillightframe_R_2017_sw222_vehiclelights_0.geometry
          }
          material={materials.PaletteMaterial005}
          position={[-0.68, 0.842, -2.426]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload('public/benz-transformed.glb');
