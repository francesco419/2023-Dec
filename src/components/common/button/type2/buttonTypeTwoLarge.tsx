import styled,{css} from "styled-components";
import { Text } from "../../font/fontTag";

interface ButtonText {
  text:string;
}

export const ButtonText = styled.button`
display:block;
margin: 40px auto;
width:fit-content;
background-color:transparent;
border:0;
cursor: pointer;
color:${props=>props.theme.color.fontcolor};
`
export function ButtonOnlyText({text}:ButtonText){
  return(
    <ButtonText>
      <Text $fontsize='small' $bold>{text}</Text>
    </ButtonText>
  )
}
