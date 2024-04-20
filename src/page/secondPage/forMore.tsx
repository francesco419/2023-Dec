import { ButtonBackMove } from './buttonBackMove';
import { useState } from 'react';
import { LinkedButton } from '../../components/common/button/link/linkButton';

interface ForMoreType {
  forMore: boolean;
}

const tempData2 = [
  {
    img: 'https://picsum.photos/320/200',
    title: 'TravelAway',
    text: ''
  },
  {
    img: 'https://picsum.photos/320/200',
    title: 'Youtube',
    text: ''
  },
  {
    img: 'https://picsum.photos/320/200',
    title: 'SNS',
    text: ''
  },
  {
    img: 'https://picsum.photos/320/200',
    title: 'Portfolio',
    text: ''
  }
];

export default function ForMore({ forMore }: ForMoreType) {
  const [buttonBack, setButtonBack] = useState<number>(0);
  const [buttonlength, setButtonLength] = useState<number>(0);

  const getButtonBack = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (e.currentTarget) {
      const current = e.currentTarget;
      if (current.offsetLeft!==null && current.offsetWidth!==null) {
        setButtonBack((buttonBack) => current.offsetLeft);
        setButtonLength((buttonLength) => current.offsetWidth);
      }
    }
  };

  return (
    <div
      style={
        !forMore
          ? { display: 'flex' }
          : {
              display: 'flex',
              margin: '100px auto 0',
              justifyContent: 'center',
              gap: '100px',
              position: 'relative'
            }
      }
    >
      <ButtonBackMove buttonBack={buttonBack} buttonLength={buttonlength} />
      {tempData2.map((o, index) => {
        return (
          <LinkedButton
            toPage={o.title}
            toLink={o.title}
            mouseOver={getButtonBack}
            key={`${index}_${o.title}`}
          ></LinkedButton>
        );
      })}
    </div>
  );
}
