import { useState } from 'react';
import { Container } from '../common/container';
import { Model } from './Benz';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
//import { Model } from './Scene';

const Project = () => {
  const [change, setChange] = useState<number>(0);
  const [com, setCom] = useState<number>(0);

  const component = [
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>,
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>
  ];

  const keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  };

  return (
    <Container style={{ height: '1000px', width: '1000px', margin: '0 auto' }}>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 3, 3.5] }}>
        <Environment preset='apartment' />
        <OrbitControls
          target={[0, 0, 0]}
          autoRotate
          autoRotateSpeed={1.0}
          enableZoom={false}
          maxPolarAngle={1.5}
          minPolarAngle={0.9}
        />
        <ambientLight intensity={10} color={0xffffff} />
        <pointLight color={0xffffff} intensity={10} />
        <directionalLight
          color={0xffffff}
          intensity={10}
          position={[0, 1, 0]}
        />
        <Model />
      </Canvas>
    </Container>
  );
};

export default Project;
