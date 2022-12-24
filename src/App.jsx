import { useState } from 'react'
import Main from './components/Main'
import Navbar from './components/Navbar'
import About from './components/About'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
