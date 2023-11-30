import React from "react";
import "./about.css";
import Ajay from "../../assets/ajay7.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Ajay} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5+ Years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I hold a Bachelor's degree in Computer Engineering and am presently
            employed as a Mid-Level Full Stack Developer. My expertise
            encompasses a wide range of technologies, including React, Next.js,
            Node.js, Express.js, Nest, Postgres, MongoDB, Prisma, Mongoose, and
            AWS. Leveraging my problem-solving skills, I am adept at crafting
            state-of-the-art, user-friendly websites and applications. My
            commitment to staying abreast of industry trends and advancements
            reflects my passion for delivering cutting-edge solutions. Feel free
            to contact me anytime at 9813510603 or
            ajayranabhatofficial@gmail.com.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
