import React from 'react'
import './footer.css'
// import {FaFacebookF} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
// import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ANSHUMAN</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a> </li>
          <li><a href="#about">About</a> </li>
          <li><a href="#skill">Skill</a> </li>
          <li><a href="#portfolio">Portfolio</a> </li>
          <li><a href="#services">Education</a> </li>
          <li><a href="#contact">Contact</a> </li>
        </ul>
        <div className='footer__socials'>
           <a href="http://wa.me/+916386692392" target="_blank"><BsWhatsapp/></a>
           <a href="https://www.linkedin.com/in/anshuman-h/" target='_blank'><AiOutlineLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small>© All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
