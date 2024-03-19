import { motion } from 'framer-motion';
import { Container } from '../common/container';

export default function StartPage() {
  return (
    <Container
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h2>StartPage</h2>
      </div>
    </Container>
  );
}
