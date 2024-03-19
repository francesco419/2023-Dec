import styled from 'styled-components';

interface ButtonType {
  onClick: () => void;
}

interface ButtonTypeB {
  to: string;
}

export const ButtonTypeA = styled.button<ButtonType>`
  background-color: ${(props) => props.theme.color.fontcolor};
  position: relative;
  height: unset;
  border: unset;
  border-radius: 0.35rem;
  z-index: 0;
  cursor: pointer;
  padding: 1rem 2.25rem;

  a {
    letter-spacing: 0.1rem;
    font-family: ${(props) => props.theme.font.Bold};
    color: ${(props) => props.theme.color.pointOrange};
    text-decoration: none;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  }

  &:hover {
    a {
      transition: all 0.5s;
      color: white;
    }
  }
`;

export const ButtonTypeB = styled.link<ButtonTypeB>`
  padding: 0.5rem 2.25rem;
  background-color: ${(props) => props.theme.color.fontcolor};
  position: relative;
  height: unset;
  border: unset;
  border-radius: 0.35rem;
  z-index: 0;
  cursor: pointer;
`;
