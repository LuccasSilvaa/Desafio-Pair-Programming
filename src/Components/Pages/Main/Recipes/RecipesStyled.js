import styled from "styled-components";

export const Main = styled.main`

width: 100%;
height:50rem;
display: flex;
flex-direction: column;
justify-content: center;
justify-content: space-evenly;
align-items: center;
h2{
  position:relative;
  font-size: 40px;
  color: #373737;
  ::after{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 4rem;
    content:'';
    width:6rem;
    height: 4px;
    background-color: #373737;
    border-radius: 3px;
    display: block;
    margin: 0 auto;
  }
}
`

export const Cards = styled.div`
width: 100%;
display:flex;
justify-content: space-around;


figure{
  height: 500px;
  box-shadow: 0px 7px 6px #00000029;
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
}
figcaption{
  position: relative;
  margin-top: 5rem;

  ::before{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
    content:'';
    width:3rem;
    height: 4px;
    background-color: currentColor;
    border-radius: 3px;
    display: block;
    margin: 0 auto;
  }
}
img{
  width: 25rem;
}
`