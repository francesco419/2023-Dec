import { Container } from '../common/container';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera
} from '@react-three/drei';
import { ModelCoin } from './Bitcoin';
import { useState } from 'react';

const AUTOROTATESPEED = 5;
const ENABLEZOOM = false;
const POLARANGLE = 1.5;

interface XYZ_Type {
  x: number;
  y: number;
  z: number;
}

const Project = () => {
  const [foo, setFoo] = useState<boolean>(true);
  const [xyz, setXyz] = useState<XYZ_Type>({
    x: 10,
    y: 10,
    z: 10
  });

  const pointEnter = () => {
    setFoo((foo) => false);
  };

  const pointLeave = () => {
    setFoo((foo) => true);
  };

  /**useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.pointer.x, 1 + state.pointer.y / 2, 8 + Math.atan(state.pointer.x * 2)], 0.3, delta)
    state.camera.lookAt(state.camera.position.x * 0.9, 0, -4)
  }) */

  const xyzHandler = (axis: string) => {
    let temp: XYZ_Type = xyz;
    if (axis === 'x') {
      temp.x = temp.x + 10;
      console.log(temp);
      setXyz((xyz) => temp);
      return;
    }
    if (axis === 'y') {
      temp.y = temp.y + 10;
      console.log(temp);
      setXyz((xyz) => temp);
      return;
    }
    if (axis === 'z') {
      temp.z = temp.z + 10;
      console.log(temp);
      setXyz((xyz) => temp);
      return;
    }
  };

  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [xyz.x, xyz.y, xyz.z]
        }}
      >
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
        {/* <ambientLight intensity={10} color={0xffffff} /> */}
        {/*
        <pointLight color={0xffffff} intensity={10} />
        <directionalLight
          color={0xffffff}
          intensity={10}
          position={[0, 0, 0]}
        /> */}
        <ModelCoin onPointerEnter={pointEnter} onPointerLeave={pointLeave} />
      </Canvas>
      <div style={{ position: 'absolute', top: '100px', left: '100px' }}>
        <button onClick={() => xyzHandler('x')}>x</button>
        <button onClick={() => xyzHandler('y')}>y</button>
        <button onClick={() => xyzHandler('z')}>z</button>
      </div>
    </>
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
