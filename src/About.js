import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { AppContext, useProductContext } from './context/productcontext'

const About = () => {
  const Mydata = useProductContext();

  const data = {
    name: "Amazon digital product"
  }
  return (
    <>
    {Mydata}
    <HeroSection myData={data}/>
      
    </>
  )
}

export default About