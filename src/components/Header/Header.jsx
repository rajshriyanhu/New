import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials.jsx'
import me from '../../assets/me.jpg'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hello I'm</h5>
        <h1>Shriyanshu Raj</h1>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt=''></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header