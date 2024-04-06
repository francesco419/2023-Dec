import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BlankButton } from '../blank/blankButton';
import { motion } from 'framer-motion';

interface LinkButtonType {
  toLink: string;
  toPage: string;
  mouseOver: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

export const LinkButton = styled.button`
  box-sizing: border-box;
  height: 40px;
  background-color: #00000000;
  border: 0;
  a {
    font-size: 1.5rem;
    color: ${(props) => props.theme.color.fontcolor};
    letter-spacing: 0.1rem;
    font-family: ${(props) => props.theme.font.Bold};
    text-decoration: none;
    &:hover {
      color: ${(props) => props.theme.color.pointRed};
    }
  }
`;

export function LinkedButton({ toLink, toPage, mouseOver }: LinkButtonType) {
  return (
    <motion.div
      style={{ zIndex: 99 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LinkButton onMouseEnter={mouseOver}>
        <Link to={toLink}>{toPage}</Link>
      </LinkButton>
    </motion.div>
  );
}
