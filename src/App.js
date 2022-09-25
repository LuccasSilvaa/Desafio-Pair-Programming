import React from 'react'
import Header from './Components/Pages/Header/index'
import Recipes from './Components/Pages/Main/Recipes/index'
import { GlobalStyle } from './Components/global/style'
export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Header/>
    <Recipes/>
    </>
  )
}
