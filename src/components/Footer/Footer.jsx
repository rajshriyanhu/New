import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const Footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer__logo'>Shriyanshu</a> */}
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>

      </ul>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/shriyanshu.raj.3' target='_blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/shriyanshu.raj/?hl=en' target='_blank'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/shriyanshu-raj-9b4996206/' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/rajshriyanhu' target='_blank'><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer