import React, { useEffect, useState } from 'react';
import { Container } from '../common/container';
import { AnimatePresence, motion } from 'framer-motion';
import { Img } from './img';
import ThreeJs from './threeJs';

const Project = () => {
  const [change, setChange] = useState<number>(0);
  const [com, setCom] = useState<number>(0);

  const component = [
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>,
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>
  ];

  return (
    <Container>
      {/* <Img img={component[com]} change={com} />
      <button
        onClick={() => {
          setCom((com) => com + 1);
        }}
      >
        next
      </button> */}
      <ThreeJs />
    </Container>
  );
};

export default Project;
