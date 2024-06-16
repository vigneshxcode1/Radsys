import React from 'react'
import Navbar from "../../components/Navbar"
import Corosal from "../../../src/components/corosal/Corosal"
import About from '../../components/about/about.jsx'
import { Callcard } from '../../components/call/Callcard.jsx'
import Work from '../work/Work.jsx'
import Stack from '../../components/stack/Stack.jsx'
import Footer from '../../components/footer/Footer.jsx'
const Home = () => {
  return (
    <>
      <Navbar/>
    <Corosal/>
    <About/>
    //why u choose
    <Work/>
    <Stack/>
    <Callcard/>
    <Footer/>
    </>
  
    
  )
}

export default Home