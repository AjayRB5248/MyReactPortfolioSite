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
<br/>I have been working as a web developer/programmer for more than 1 year in some of the reputed freelancing sites and have
 got many positive reviews from my clients. Also i have some good knowledge in photoshop,video editing,logo designing and vector art design.
</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About