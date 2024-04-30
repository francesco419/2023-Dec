import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, GroupProps } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { useRef } from 'react';

interface ModelType {
  props: any;
}

export const ThreeJs = ({ props }: ModelType) => {
  const { materials, nodes } = useGLTF('/benz-transformed.glb');

  const keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  };

  return (
    <>
      <Canvas>
        <group {...props} dispose={null}>
          <PerspectiveCamera
            name='camera'
            fov={40}
            near={10}
            far={1000}
            position={[10, 0, 50]}
          />
          <pointLight
            intensity={10}
            position={[100, 50, 100]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group position={[10, -5, 0]}>
            <mesh material={materials.metal} />
            <mesh material={materials.wood} />
          </group>
        </group>
      </Canvas>
    </>
  );
};

//geometry={nodes.rocket.geometry} => problem?

useGLTF.preload('/benz.gltf'); //faster response;

/*     <>
      <Canvas>
        <OrbitControls keys={keys} />
        <mesh>
          <ambientLight intensity={1} />
          <meshBasicMaterial color={0x00ff00} />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </Canvas>
    </> 
  */
