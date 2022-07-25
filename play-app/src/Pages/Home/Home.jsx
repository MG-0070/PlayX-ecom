import React from 'react'
import {Header,Main,Footer } from "../../Components"
import { useDocumentTitle } from '../../Hooks/useDocumentTitle'


const Home = () => {
  useDocumentTitle("Home")
  return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export  {Home}