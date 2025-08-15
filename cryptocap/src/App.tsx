import React from 'react'
import Navbar from './pages/Navbar'
import Features from './pages/Features'
import Categerioes from './pages/Categerioes'
import Explore from './pages/Explore'
import Customer from './pages/Customer'
import LearnCrypto from './pages/LearnCrpto'

const App:React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Features/>
      <Explore/>
      <Categerioes/>
      <Customer/>
      <LearnCrypto/>
     
    </div>
  )
}

export default App
