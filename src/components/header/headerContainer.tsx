import '../../App.scss';
import styled, { css } from 'styled-components';
import { TextTag } from '../common/font/fontTag';

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  border-bottom: 2px solid ${(props) => props.theme.fontcolor};
  padding: 0 300px 10px 30px;
`;

const headerText = ['24/03/14', 'LEE SANG HYEON', 'THROUGH OUT THE WORK'];

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderInner>
        {headerText.map((o) => {
          return <TextTag $fontsize='medium'>{o}</TextTag>;
        })}
      </HeaderInner>
    </HeaderContainer>
  );
}
