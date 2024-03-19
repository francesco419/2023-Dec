import styled from 'styled-components';
import { css } from 'styled-components';
import { BoldType } from '../../../assets/types/types';

export const TitleH1Tag = styled.h1<BoldType>`
  font-family: ${(props) => props.theme.font.Reg};
  color: ${(props) => props.theme.color.fontcolor};
  font-size: 4rem;
  ${(props) =>
    props.$bold === true &&
    css`
      font-family: ${(props) => props.theme.font.Bold};
    `}
`;

export const TitleH2Tag = styled.h2<BoldType>`
  font-family: ${(props) => props.theme.font.Reg};
  color: ${(props) => props.theme.color.fontcolor};
  font-size: 48px;
  ${(props) =>
    props.$bold === true &&
    css`
      font-family: ${(props) => props.theme.font.Bold};
    `}
`;

export const TitleH3Tag = styled.h3<BoldType>`
  font-family: ${(props) => props.theme.font.Reg};
  color: ${(props) => props.theme.color.fontcolor};
  font-size: 2.5rem;
  ${(props) =>
    props.$bold === true &&
    css`
      font-family: ${(props) => props.theme.font.Bold};
    `}
`;
