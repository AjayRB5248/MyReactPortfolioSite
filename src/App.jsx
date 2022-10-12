import React from 'react'
import Header from './components/header/Header'
import Nav from './components/navbar/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'

// import Portfolio  from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certificate from './components/certificates/Certificate'
import Portfolio from './components/portfolio/Portfolio'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        <Portfolio/>
       <Certificate/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App