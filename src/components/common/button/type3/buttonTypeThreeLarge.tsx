import styled,{css} from "styled-components";
import { Text } from "../../font/fontTag";

interface ButtonSubmit {
  text:string;
  onClick:()=>any;
}

export const ButtonSubmitStlyed = styled.button`
display:block;
margin: 40px auto 0;
width:fit-content;
background-color:transparent;
border:0;
cursor: pointer;
color:${props=>props.theme.color.fontcolor};
`
export function ButtonSubmit({text,onClick}:ButtonSubmit){
  return(
    <ButtonSubmitStlyed onClick={onClick}>
      <Text $fontsize='small' $bold>{text}</Text>
    </ButtonSubmitStlyed>
  )
}
