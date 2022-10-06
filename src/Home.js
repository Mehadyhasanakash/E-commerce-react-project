import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {
  const data = {
    name :"Amazon Shop",
  }
  
  return (
    <div>
      <HeroSection myData= {data}/>
    </div>
  )
}



export default Home