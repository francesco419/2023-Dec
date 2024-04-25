import React, { useEffect, useState } from 'react';
import { Container } from '../common/container';
import { AnimatePresence, motion } from 'framer-motion';
import { Img } from './img';

const Project = () => {
  const [change, setChange] = useState<number>(0);
  const [com, setCom] = useState<number>(0);

  const component = [
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>,
    <p>hhellohellohellohellohellohellohellohellohellohellohellohelloello</p>
  ];

  return (
    <Container>
      <AnimatePresence mode='wait'>
        {<Img img={component[com]} change={com} />}
      </AnimatePresence>
      <button
        onClick={() => {
          setCom((com) => com + 1);
        }}
      >
        next
      </button>
    </Container>
  );
};

export default Project;
