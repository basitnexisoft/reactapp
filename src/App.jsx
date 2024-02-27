import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
function App() {

  return (
    <>
      <Navbar/>

      <main>
        <div id="home">
          <Home/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="services">
          <Services/>
        </div>

        <div id="dortors">
          <Doctors/>
        </div>
        <div id="blog">
          Blog
        </div>
      </main>
      
    </>
  )
}

export default App
