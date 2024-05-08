import { Container } from '../common/container';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ModelCoin } from './Bitcoin';
import { Model } from './Benz';
import { ModelCoinN } from './BitcoinN';

const Project = () => {
  return (
    <Container style={{ height: '1000px', width: '1000px', margin: '0 auto' }}>
      <Canvas>
        <Environment preset='apartment' />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3.0}
          /* enableZoom={false} */
          /* maxPolarAngle={1.5}
          minPolarAngle={0.9} */
        />
        <ambientLight intensity={10} color={0xffffff} />
        {/*
        <pointLight color={0xffffff} intensity={10} />
        <directionalLight
          color={0xffffff}
          intensity={10}
          position={[0, 0, 0]}
        /> */}
        <ModelCoinN />
      </Canvas>
    </Container>
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
