import { motion } from 'framer-motion';
import { Container } from '../common/container';

export default function StartPage() {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h2>StartPage</h2>
        </div>
      </motion.div>
    </Container>
  );
}
