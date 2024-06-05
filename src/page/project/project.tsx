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

const AUTOROTATESPEED = 5;
const ENABLEZOOM = false;
const POLARANGLE = 1.5;

const Project = () => {
  const [foo, setFoo] = useState<boolean>(true);

  const pointEnter = () => {
    setFoo((foo) => false);
  };

  const pointLeave = () => {
    setFoo((foo) => true);
  };

  return (
    <Canvas>
      <Environment preset='apartment' />
      {/* <OrbitControls
        autoRotate={foo}
        autoRotateSpeed={AUTOROTATESPEED}
        enableDamping
        dampingFactor={foo ? 1 : 0.01}
        enableZoom={ENABLEZOOM}
        maxPolarAngle={POLARANGLE}
        minPolarAngle={POLARANGLE}
      /> */}
      <PerspectiveCamera position={[10, 0, 10]} rotation={[30, 20, 10]} />
      <ambientLight intensity={10} color={0xffffff} />
      {/*
        <pointLight color={0xffffff} intensity={10} />
        <directionalLight
          color={0xffffff}
          intensity={10}
          position={[0, 0, 0]}
        /> */}
      <ModelCoin onPointerEnter={pointEnter} onPointerLeave={pointLeave} />
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

// 버튼 컨트롤에 따라 카메라의 위치 이동
// * 부드러운 이동 + 이동 사이의 공간 고려
