import React from 'react'
import FutureProduct from './components/FutureProduct'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'

const Home = () => {
  const data = {
    name: "Amazon Product"
  }
  
  return (
    <div>
      <HeroSection myData = {data}/>
      <FutureProduct/>
      <Services/>
      <Trusted/>
    </div>
  )
}



export default Home