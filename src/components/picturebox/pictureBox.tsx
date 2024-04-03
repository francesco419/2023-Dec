import styled, { css } from 'styled-components';
import { Text } from '../common/font/fontTag';
import { TitleH3Tag } from '../common/font/titleComp';
import { motion } from 'framer-motion';

const PictureBoxHover = styled.div<{ $type: string }>`
  ${(props) =>
    props.$type === 'big' &&
    css`
      width: 450px;
      height: 450px;
    `}
  ${(props) =>
    props.$type === 'medium' &&
    css`
      width: 350px;
      height: 350px;
    `}
${(props) =>
    props.$type === 'small' &&
    css`
      width: 250px;
      height: 250px;
    `}
    filter:contrast(60%);
  transition: transform 0.5s, filter 0.5s;
  &:hover {
    transform: translateY(-20px);
    filter: contrast(100%);
  }
  margin: 0 auto;
`;

export const PictureBoxContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.color.pointGrey};
  border-radius: 15px;
  border: 0;
  padding: 15px;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 2px rgb(0 0 0 / 25%);
`;

const PictureBoxImg = styled.img<{ $type: string }>`
  background-color: ${(props) => props.theme.color.fontcolor};
  ${(props) =>
    props.$type === 'big' &&
    css`
      width: 350px;
      height: 200px;
    `}
  ${(props) =>
    props.$type === 'medium' &&
    css`
      width: 320px;
      height: 200px;
    `}
${(props) =>
    props.$type === 'small' &&
    css`
      width: 220px;
      height: 100px;
    `}
border-radius:15px;
  border: 0;
  overflow: hidden;
  margin-bottom: 5px;
`;

interface PictureBoxType {
  img: string;
  title: string;
  text: string;
  delay: number;
  type: string;
}

export default function PictureBox({
  img,
  title,
  text,
  delay,
  type
}: PictureBoxType) {
  return (
    <PictureBoxHover $type={type}>
      <PictureBoxContainer
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: delay, ease: 'linear' }}
      >
        <PictureBoxImg src={img} $type={type} />
        {type === 'medium' ? (
          <TitleH3Tag style={{ margin: '0' }}>{title}</TitleH3Tag>
        ) : (
          <Text $fontsize='medium'>{text}</Text>
        )}
        <Text $fontsize={type} $bold>
          {text}
        </Text>
      </PictureBoxContainer>
    </PictureBoxHover>
  );
}
