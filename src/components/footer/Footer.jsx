import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Ajay Ranabhat
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expereince">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/ajay-ranabhat-600923194/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/arb12345" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.facebook.com/ajay.ranabhat.92"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/ajay_ranabhat/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://twitter.com/Ajayranabhat2"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ajay Ranabhat. All right reserved.2022</small>
      </div>
    </footer>
  );
};

export default Footer;
