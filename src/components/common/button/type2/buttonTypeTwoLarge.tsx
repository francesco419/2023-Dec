import styled,{css} from "styled-components";
import { Text } from "../../font/fontTag";

interface ButtonText {
  text:string;
  onClick:()=>any;
}

export const ButtonText = styled.button`
display:block;
margin: 40px auto 0;
width:fit-content;
background-color:transparent;
border:0;
cursor: pointer;
color:${props=>props.theme.color.fontcolor};
`
export function ButtonOnlyText({text,onClick}:ButtonText){
  return(
    <ButtonText onClick={onClick}>
      <Text $fontsize='small' $bold>{text}</Text>
    </ButtonText>
  )
}
