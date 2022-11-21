import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

function About() {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "About Me" text = "General Information"/>
      <Footer/>
    </div>
  )
}

export default About