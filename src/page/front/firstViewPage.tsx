import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/container';
import { TextTag } from '../../components/common/font/fontTag';

export default function FirstViewPage() {
  const nav = useNavigate();

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{ padding: '100px 30px' }}
      >
        <TextTag $fontsize='medium'>FirstViewPage</TextTag>
        <button
          onClick={() => {
            nav('/riri');
          }}
        >
          RIRIRIRI
        </button>
      </motion.div>
    </Container>
  );
}
