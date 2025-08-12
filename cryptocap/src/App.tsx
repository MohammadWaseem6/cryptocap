import React from 'react'
import Navbar from './pages/Navbar'
import Features from './pages/Features'
import Categerioes from './pages/Categerioes'
import Explore from './pages/Explore'
const App:React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Features/>
      <Explore/>
      <Categerioes/>
    </div>
  )
}

export default App
