import styled,{css} from "styled-components";
import { Text } from "../common/font/fontTag";
import { TitleH3Tag } from "../common/font/titleComp";
import { motion } from "framer-motion";

const PictureBoxHover = styled.div<{$type:string}>`
${props=>props.$type==='big' && 
css`
width:350px;
height:350px;
`}
${props=>props.$type==='medium' && 
css`
width:250px;
height:250px;
`}
${props=>props.$type==='small' && 
css`
width:150px;
height:150px;
`}
transition: transform 0.5s;
&:hover{
    transform:translateY(-20px);
}
margin: 0 auto;
`

export const PictureBoxContainer = styled(motion.div)`
background-color:${props=>props.theme.color.pointGrey};
border-radius:15px;
border:0;
padding:15px;
box-sizing:border-box;
box-shadow: 2px 2px 10px 2px rgb(0 0 0 / 25%);
`

const PictureBoxImg = styled.img`
background-color:${props=>props.theme.color.fontcolor};
border-radius:15px;
border:0;
overflow:hidden;
height:200px;
margin-bottom:5px;
`

interface PictureBoxType {
    img:string;
    title:string;
    text:string;
    delay:number;
    type:string;
}

export default function PictureBox({img,title,text,delay,type}:PictureBoxType){
    return(
        <PictureBoxHover $type={type}>
            <PictureBoxContainer initial={{y:-50, opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7,delay:delay, ease:"linear"}}>
                <PictureBoxImg src={img}/>
                <TitleH3Tag style={{margin:'0'}}>
                    {title}
                </TitleH3Tag>
                <Text $fontsize="medium" $bold>
                    {text}
                </Text>
            </PictureBoxContainer>
        </PictureBoxHover>
    )
}