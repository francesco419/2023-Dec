import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../common/container';
import PictureBox  from '../../components/picturebox/pictureBox';
import styled from 'styled-components';
import { TitleH2Tag } from '../../components/common/font/titleComp';
import { ButtonOnlyText } from '../../components/common/button/type2/buttonTypeTwoLarge';

const SecCon = styled.div`
display:flex;
align-content:center;
flex-wrap:wrap;
width:100%;
`

const tempData = [
  {
    img:'https://picsum.photos/320/200',
    title:'Lorem',
    text:'Lorem Picsum is good',
  },
  {
    img:'https://picsum.photos/320/200',
    title:'Lorem',
    text:'Lorem Picsum is good'
  },
  {
    img:'https://picsum.photos/320/200',
    title:'Lorem',
    text:'Lorem Picsum is good'
  }
]

export default function StartPage() {
  return (
    <Container
      initial={{ opacity:0 }}
      animate={{ opacity:1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >   
    <div style={{width:'100%'}}>
      <TitleH2Tag $bold>Works</TitleH2Tag>
      <SecCon>
        {tempData.map((o,index)=>{
          return(
            <PictureBox type='big' img={o.img} text={o.text} title={o.title} key={o.title} delay={index*0.5}/>
          )
        })}
      </SecCon>
      <ButtonOnlyText text='For More'/>
    </div>
    </Container>
  );
}
