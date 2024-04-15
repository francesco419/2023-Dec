import { useState } from 'react';
import styled from 'styled-components';

interface ButtonMoveType {
  buttonBack: number;
  buttonLength: number;
}

/* export default function ButtonBackMove({
  buttonBack,
  buttonLength
}: ButtonMoveType) {
  return (
    <div
      style={{
        display: 'block',
        borderRadius: '15px',
        position: 'absolute',
        top: 0,
        left: Math.round(buttonBack) - 1,
        width: `${Math.round(buttonLength)}px`,
        height: '40px',
        backgroundColor: 'white',
        transition: 'all 0.5s'
      }}
    />
  );
} */

export const ButtonBackMove = styled.div<ButtonMoveType>`
  display: block;
  border-radius: 15px;
  position: absolute;
  top: 0;
  left: ${(props) => props.buttonBack}px;
  width: ${(props) => props.buttonLength}px;
  height: 40px;
  background-color: white;
  transition: all 0.5s;
`;
