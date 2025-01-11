import React from 'react'
import Navbar from './componets/Navbar'
import Weather from './componets/Weather'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Weather/>
      <Footer/>
    </div>
  )
}

export default App