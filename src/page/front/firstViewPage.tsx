import { useNavigate } from 'react-router-dom';
import { Container } from '../common/container';
import { TitleH1Tag, TitleH3Tag } from '../../components/common/font/titleComp';
import { Link } from 'react-router-dom';
import { ButtonTypeA } from '../../components/common/button/type1/buttonTypeOneLarge';

export default function FirstViewPage() {
  const nav = useNavigate();

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
      <div
        style={{
          padding: '0 0 7% 0',
          alignSelf: 'self-end',
          margin: ' 0 0 0 auto'
        }}
      >
        <ButtonTypeA onClick={() => {}}>
          <Link to={'/riri'}>FURTHER MORE</Link>
        </ButtonTypeA>
      </div>
    </Container>
  );
}
