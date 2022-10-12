import React from 'react'
import './header.css'
import CTA from './CTA'
// import Ajay from '../../assets/ajay.jpg'
import HeaderSocials from './HeaderSocials'
import background from './../../assets/video.mp4'

const Header = () => {
  return (
    <header>
      <div className=' header__container'>
      {/* <div className="head"> */}
    <video src={background} autoPlay muted loop/>
    <div className="contents">
        <h5>Hello I'm</h5>
        <h1>Ajay Ranabhat</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        </div>
        {/* <div className='me'>
          <img src={Ajay} alt='Me'/>
          </div> */}
          {/* <a href='#Contact' className="scroll__down">Scroll Down</a> */}
          {/* </div> */}
          </div>

    </header>
  )
}

export default Header