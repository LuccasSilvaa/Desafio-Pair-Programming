import React from 'react'
import Logo from './img/RC.svg'

import * as S from './HeaderStyled'

export default function index() {
  return (
    <S.Header>
    <S.Navegation>
      <img src={Logo} alt="" />
      <section>
        <ul>
          <li><a href="">ABOUT</a></li>
          <li><a href="">RECIPES</a></li>
          <li><a href="">SUBSCRIBE</a></li>
        </ul>
      </section>
    </S.Navegation>
       
        <h1>RECIPES</h1>
    

    </S.Header>
  )
}
