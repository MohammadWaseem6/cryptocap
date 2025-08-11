import React from 'react'
import Navbar from './pages/Navbar'
import Features from './pages/Features'
import Categerioes from './pages/Categerioes'
const App:React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Features/>
      <Categerioes/>
    </div>
  )
}

export default App
