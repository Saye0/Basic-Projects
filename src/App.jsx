import { useState } from 'react'
import Navbar from './Components/Navbar'
import './app.css'
import Hero from './Components/Hero'
import Feature from './Components/Feature'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
