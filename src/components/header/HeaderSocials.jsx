import React from 'react'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{BsFacebook} from 'react-icons/bs'
import{BsTwitter} from 'react-icons/bs'
import{BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/ajay-ranabhat-600923194/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/arb12345' target="_blank"><BsGithub/></a>
        <a href='https://www.facebook.com/ajay.ranabhat.92' target="_blank"><BsFacebook/></a>
        <a href='https://twitter.com/Ajayranabhat2' target="_blank"><BsTwitter/></a>
        <a href='https://www.instagram.com/ajay_ranabhat/' target="_blank"><BsInstagram/></a>
        
    </div>
  )
}

export default HeaderSocials