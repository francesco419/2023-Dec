import styled from 'styled-components';
import { css } from 'styled-components';
import { BoldType } from '../../../assets/types/types';

interface TextType extends BoldType {
  $fontsize: string;
}

export const Text = styled.p<TextType>`
  font-family: ${(props) => props.theme.font.Reg};
  color: ${(props) => props.theme.color.fontcolor};
  ${(props) =>
    props.$fontsize === 'small' &&
    css`
      font-size: 1rem;
    `}
  ${(props) =>
    props.$fontsize === 'medium' &&
    css`
      font-size: 1.5rem;
    `}
  ${(props) =>
    props.$fontsize === 'big' &&
    css`
      font-size: 2rem;
    `}
    ${(props) =>
    props.$bold === true &&
    css`
      font-family: ${(props) => props.theme.font.Bold};
    `}
`;
