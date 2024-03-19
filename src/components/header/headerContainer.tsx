import '../../App.scss';
import styled, { css } from 'styled-components';
import { Text } from '../common/font/fontTag';
import { now } from '../../function/date';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.color.fontcolor};
  z-index-99;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 300px 0 0;
  width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;

  p {
    margin: 0;
  }
`;

const headerText = [now, 'LEE SANG HYEON', 'THROUGH OUT THE WORK'];

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        {headerText.map((o) => {
          return (
            <Text $fontsize='small' $bold key={o}>
              {o}
            </Text>
          );
        })}
      </HeaderInner>
    </HeaderContainer>
  );
}
