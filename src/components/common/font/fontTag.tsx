import styled from 'styled-components';
import { css } from 'styled-components';

type TextType = {
  $fontsize: string;
  $bold?: boolean;
};

export const TextTag = styled.p<TextType>`
  font-family: Mabry Pro Reg;
  color: #522a28;
  ${(props) =>
    props.$fontsize === 'small' &&
    css`
      font-size: 12px;
    `}
  ${(props) =>
    props.$fontsize === 'medium' &&
    css`
      font-size: 16px;
    `}
  ${(props) =>
    props.$fontsize === 'big' &&
    css`
      font-size: 20px;
    `}
    ${(props) =>
    props.$bold === true &&
    css`
      font-weight: 1000;
    `}
`;
