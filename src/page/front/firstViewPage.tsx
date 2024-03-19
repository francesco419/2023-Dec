import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../common/container';
import {
  TitleH1Tag,
  TitleH2Tag,
  TitleH3Tag
} from '../../components/common/font/titleComp';
import { Link } from 'react-router-dom';
import {
  ButtonTypeA,
  ButtonTypeB
} from '../../components/common/button/type1/buttonTypeOneLarge';

export default function FirstViewPage() {
  const nav = useNavigate();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ y: -window.innerHeight }}
      transition={{ duration: 1 }}
    >
      <div>
        <TitleH1Tag style={{ maxWidth: '1000px' }}>
          For the further development
        </TitleH1Tag>
        <TitleH3Tag>
          Lee Sang Hyeon<br></br>Frontend Developer
        </TitleH3Tag>
      </div>
      <div style={{ padding: '0 0 200px 0', alignSelf: 'self-end' }}>
        <ButtonTypeA onClick={() => {}}>
          <Link to={'/riri'}>FURTHER MORE</Link>
        </ButtonTypeA>
      </div>
    </Container>
  );
}

/*         <button
          onClick={() => {
            nav('/riri');
          }}
        >
          RIRIRIRI
        </button> */
