import React from 'react'
import Header from './Components/Pages/Header/index'
import Recipes from './Components/Pages/Main/Recipes/index'
import { GlobalStyle } from './Components/global/style'
import AbourtStyled from'./Components/Pages/Main/About/index'
import Subscribe from './Components/Pages/Main/Subscribe/index'
import Footer from './Components/Pages/Footer/index'
export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Recipes/>
   <AbourtStyled/>
   <Subscribe/>
   <Footer/>
    </>
  )
}
