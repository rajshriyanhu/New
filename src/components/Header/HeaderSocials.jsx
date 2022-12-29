import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.facebook.com/shriyanshu.raj.3' target='blank'><BsFacebook/></a>
        <a href='https://www.linkedin.com/in/shriyanshu-raj-9b4996206/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/rajshriyanhu' target='blank'><FaGithub/></a>
        
    </div>
  )
}

export default HeaderSocials