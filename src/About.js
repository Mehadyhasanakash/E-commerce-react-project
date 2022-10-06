import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const data = {
    name :"Amazon Digital Shop",
  }
  
  return (
    <HeroSection myData={data}/>
  )
}

export default About