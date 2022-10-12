import React from 'react'
import './about.css'
import Ajay from '../../assets/ajay7.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={Ajay} alt='AboutImage'/>
          </div>
        </div>
        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
          <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>
              1 Years working
            </small>
          </article>
          <article className='about__card'>
          <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>
              10+ Completed
            </small>
          </article>
         
        </div>
<p>
I am an Undergraduate Computer Engineering Student currently studying in Advanced College of Engineering and Management.
<br/>As I am a fresher but with hands-on experience efficiently coding websites and web applications using modern HTML, CSS, JavaScript, React.JS, Redux-Toolkit, Next.js, Node.js,Express.js and Mongodb.<br></br>
Building-state-of-the-art, easy to use, user friendly websites and applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay-up-to-date on industry trends and advancement.<br></br> 
I can be reached anytime via cell phone, 9813510603 or by email at ajayranabhatofficial@gmail.com
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About