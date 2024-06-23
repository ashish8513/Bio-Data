import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import FooterCom from './Components/Footer'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'
import CallToAction from './Components/CallToAction'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <CallToAction />
        <Contact />
        <FooterCom />
        
      </div>
      <Toaster />
    </>
  )
}

export default App
