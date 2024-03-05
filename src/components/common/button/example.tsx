import styled, { css } from 'styled-components';

const Box = styled.div`
  background: ${(props) => props.color || 'blue'};
  padding: 1rem;
  display: flex;
`;
//Tagged Templet Literal

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-contents: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: red;
  }

  ${(props) =>
    props &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};

  & + button {
    margin-left: 1rem;
  }
`;

export default function StyledComponent() {
  return (
    <Box color='#000'>
      <Button>Upper Rin</Button>
    </Box>
  );
}
