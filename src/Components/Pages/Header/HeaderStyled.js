import styled from "styled-components";
import Fundo from './img/background.png'

export const Header = styled.div`
background-color: white;
 display: flex ;
 flex-direction: column;
 padding: 4rem;
 height: 76rem;
 background-image: url(${Fundo});
 background-repeat: no-repeat;
 background-size: 1800px;
 background-position-x:center;
 background-position-y: 2rem;

 h1{
  color: #373737;
  font-size: 150px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
 }

`



export const Navegation = styled.nav`

background-color: transparent;
display: flex;
justify-content:space-between;
align-items: center;


img{
  background-color: transparent;
}
section{
  background-color: transparent;
}
ul{
  
  background-color: transparent;
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
li{
  padding: 2px;
  font-size: 24px;
  margin-left: 5rem;
  background-color: transparent;
  &:hover{
    border: 3px solid #373737;;
  }
}
a{
  
  background-color: transparent;
}
`