import { useGLTF, useAnimations, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const ThreeJs = () => {
  /* const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  return animate(); */

  const keys = {
    LEFT: 'ArrowLeft', //left arrow
    UP: 'ArrowUp', // up arrow
    RIGHT: 'ArrowRight', // right arrow
    BOTTOM: 'ArrowDown' // down arrow
  };
  return (
    <>
      <Canvas>
        {/**setting up Canvas */}
        <OrbitControls keys={keys} />
        <mesh>
          <ambientLight intensity={1} />
          <meshBasicMaterial color={0x00ff00} />
          <boxGeometry args={[1, 1, 1]} />
        </mesh>
      </Canvas>
    </>
  );
};

export default ThreeJs;
