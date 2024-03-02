import Ball from './ball';
import { Vector3 } from 'three';

export default function FallOutCanvas() {
  return (
    <div>
      <Ball />
      <canvas id='canvas'></canvas>
    </div>
  );
}
