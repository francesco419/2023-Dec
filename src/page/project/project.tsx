import { Container } from '../common/container';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera
} from '@react-three/drei';
import { ModelCoin } from './Bitcoin';
import { Model } from './ex/Benz';
import { ModelCoinN } from './BitcoinN';
import { useState } from 'react';

const Project = () => {
  const [foo, setFoo] = useState<boolean>(true);

  return (
    <Canvas>
      <Environment preset='apartment' />
      <OrbitControls
        autoRotate={foo}
        autoRotateSpeed={5}
        enableDamping
        dampingFactor={foo ? 1 : 0.01}
        enableZoom={false}
        maxPolarAngle={1.5}
        minPolarAngle={1.5}
      />
      <ambientLight intensity={10} color={0xffffff} />
      {/*
        <pointLight color={0xffffff} intensity={10} />
        <directionalLight
          color={0xffffff}
          intensity={10}
          position={[0, 0, 0]}
        /> */}
      <ModelCoin
        onPointerEnter={() => {
          setFoo((foo) => false);
          console.log(11);
        }}
        onPointerLeave={() => {
          setFoo((foo) => true);
          console.log(11);
        }}
      />
    </Canvas>
  );
};

export default Project;

/**
 *   const keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  };

 */

//다수의 model컴포넌트 x

//3d car selection tested
//threejs fundimental study ***
