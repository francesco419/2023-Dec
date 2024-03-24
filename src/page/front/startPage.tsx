import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../common/container';
import PictureBox  from '../../components/picturebox/pictureBox';
import styled from 'styled-components';
import { TitleH2Tag } from '../../components/common/font/titleComp';
import { ButtonOnlyText } from '../../components/common/button/type2/buttonTypeTwoLarge';
import { useState } from 'react';

const SecCon = styled.div`
display:flex;
align-content:center;
flex-wrap:wrap;
width:100%;
`

const tempData = [
  {
    img:'https://picsum.photos/320/200',
    title:'Finedition',
    text:'Travel Korea for Foreiner',
  },
  {
    img:'https://picsum.photos/320/200',
    title:'BrainBomb',
    text:'MindMap for Web'
  },
  {
    img:'https://picsum.photos/320/200',
    title:'SNS',
    text:'SoCial Network Service'
  }
]

const tempData2 = [
  {
    img:'https://picsum.photos/320/200',
    title:'TravelAway',
    text:'',
  },
  {
    img:'https://picsum.photos/320/200',
    title:'Youtube',
    text:''
  },
  {
    img:'https://picsum.photos/320/200',
    title:'SNS',
    text:''
  },
  {
    img:'https://picsum.photos/320/200',
    title:'Portfolio',
    text:''
  }
]

export default function StartPage() {
  const [forMore,setForMore]=useState<boolean>(false);

  const changeForMore =()=>{
    setForMore(forMore=>!forMore);
  }

  const forMoreHandler=()=>{
    changeForMore();
  }

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
            <PictureBox type='medium' img={o.img} text={o.text} title={o.title} key={o.title} delay={index*0.5}/>
          )
        })}
      </SecCon>
      {!forMore && <ButtonOnlyText onClick={forMoreHandler} text='For More'/>}
      {forMore && <div style={!forMore ? {display:'flex'} : {display:'flex',margin:'40px 0 0'}}>
        {tempData2.map((o,index)=>{
          return(
            <PictureBox type='small' img={o.img} text={o.text} title={o.title} key={o.title} delay={index*0.5}/>
          )
        })}
      </div>}
    </div>
    </Container>
  );
}
