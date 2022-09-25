import React from 'react';
import Bolo from './img/bolo.png';
import Pizza from './img/pizza.png';
import Batida from './img/batida.png';
import * as S from './RecipesStyled';

export default function Recipes() {
  return (
    <S.Main>
      <h2>LASTE RECIPES</h2>
      <S.Cards>
        <figure>
          <img src={Bolo} alt="" />

          <figcaption>Red Velvet Cake</figcaption>
        </figure>
        <figure>
          <img src={Pizza} alt="" />
          <figcaption>Margherita Pizza</figcaption>
        </figure>
        <figure>
          <img src={Batida} alt="" />
          <figcaption>Peanut Smoothie</figcaption>
        </figure>
      </S.Cards>
    </S.Main>
  );
}
